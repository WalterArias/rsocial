//controlador del perfil
// instanciamos el objeto Perfil de los modelos

let Perfil = require("../models/Perfil");
let bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * Funcion asincronica para Hacer registro de ingreso a la app
 * @param {*} req la peticion hecha a la api
 * @param {*} res la respuesta enviada por la api
 * @returns {json object} mensaje de insercion exitosa
 */

const registrar = async (req, res) => {
  try {
    let datos = req.body;
    //validar los datos

    //crear el objeto
    const perfilGuardar = new Perfil(datos);
    //control de usuarios duplicados

    let consulta = await Perfil.find({
      $or: [
        {
          email: perfilGuardar.email.toLowerCase(),
          apodo: perfilGuardar.apodo.toLowerCase(),
        },
      ],
    }).exec();
    // encriptar y salvar
    if (consulta.length > 0) {
      return res.status(400).send({
        mensaje: "ya existe el email o usuario",
      });
    } else {
      //encriptar y salvar
      let password = await bcrypt.hash(perfilGuardar.password, 10);
      perfilGuardar.password = password;
      perfilGuardar.save();
      return res.status(200).send({
        status: "ok",
        mensaje: "Insertado con exito",
      });
    }
  } catch (error) {
    return res.status(500).send({
      nombreError: error.name,
      Mensaje: "Error en la consulta : " + error.message,
    });
  }
};

const listar = (req, res) => {
  //pagina actual
  let page;
  if (req.params.page) {
    page = req.params.page;
  }
  page = parseInt(page);
  let itemsPerPage = 4;
  // necesario para el funcionamiento del moongoose paginate v2
  const options = {
    page,
    limit: itemsPerPage,
    sort: { _id: 1 },
  };

  Perfil.paginate({}, options)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          status: "error",
          mensaje: "No hay Registros para mostrar !",
        });
      }

      // devuelve el resultado
      return res.status(200).send({
        status: "ok",
        mensaje: "Ejecución exitosa !",
        perfiles: result.docs,
        page,
        limite: result.limit,
        totalPaginas: result.totalPages,
        totalRegistros: result.totalDocs,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        status: "error",
        mensaje: "error al generar el listado",
        error,
      });
    });
};

const upload = async (req, res) => {
  try {
    // id de perfil
    let id = req.params.id;
    //cargar nombre del archivo
    let imagen = req.file.originalname;
    //sacar extension de archivo
    const imagenExtension = imagen.split(".");
    const extension = imagenExtension[1];
    if (extension != "png" && extension != "jpeg" && extension != "jpg") {
    } else {
      await Perfil.findOneAndUpdate({ id: id }, { foto: req.file.filename }, { new: true });
      return res.status(200).send({
        status: "exitoso",
        mensaje: "subida de imagenes exitosa",
        files: req.file,
      });
    }
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error  : " + error.message,
    });
  }
};

const listarUno = async (req, res) => {
  try {
    //obtener el id
    let id = req.params.id;
    let consulta = await Perfil.findById(id).select({ password: 0, rol: 0 }).exec();
    return res.status(200).send({
      status: "ok",
      mensaje: " Consulta exitosa !",
      user: {
        id: consulta._id,
        email: consulta.email,
        nombre: consulta.nombre,
        apodo: consulta.apodo,
      },
    });
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error en la consulta : " + error.message,
    });
  }
};

const borrarUno = async (req, res) => {
  try {
    //obtener el id
    let id = req.params.id;
    let consulta = await Perfil.findOneAndDelete(id).exec();
    return res.status(200).send({
      resultado: "success",
    });
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error en la consulta : " + error.message,
    });
  }
};

const editar = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;

    let consulta = await Perfil.findOneAndUpdate({ _id: id }, data).exec();
    return res.status(200).send({
      resultado: "success",
      consulta,
    });
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error en la actualizacion : " + error.message,
    });
  }
};

const login = async (req, res) => {
  //datos de la peticion (body)
  let data = req.body;
  //validamos que la data esté completa
  if (!data.email || !data.password) {
    res.status(400).send({
      resultado: "error",
      mensaje: "faltan datos por enviar del formulario ! ",
    });
  }
  // buscar en la bd el usuario  y validar
  let consulta = await Perfil.findOne({ email: data.email }).exec();
  if (consulta == null) {
    return res.status(400).send({
      resultado: "error",
      mensaje: "Usuario no existe en la BD",
    });
  } else {
    let pwd = bcrypt.compareSync(data.password, consulta.password);
    if (!pwd) {
      return res.status(400).send({
        resultado: "error",
        mensaje: "Password Erronea !",
      });
    }
  }
  //generamos el token  --- sencillo
  const token = jwt.sign(
    {
      userId: consulta._id,
      email: consulta.email,
    },
    "SeCrEtO",
    {
      expiresIn: "1d",
    }
  );

  //resultado final del método
  return res.status(200).send({
    status: "ok",
    mensaje: " Ingreso exitoso !",
    user: {
      id: consulta._id,
      email: consulta.email,
    },
    token: token,
  });
};

module.exports = {
  /* crear, */
  registrar,
  listar,
  listarUno,
  borrarUno,
  editar,
  upload,
  login,
};
