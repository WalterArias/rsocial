//Controlador para hacer seguimiento a perfiles de usuario
const Seguir = require("../models/Seguir");
const Perfil = require("../models/Perfil");

// Accion para guardar el seguimiento a un perfil
const guardar = async (req, res) => {
  try {
    // obtener la data del formulario - Body -
    // este es el id del usuario a seguir
    let perfilAseguir = req.body.perfilseguido;
    // obtenemos el id del usuario registrado en el sistema
    let perfilIngreso = req.user.userId;
    // creamos el objeto de acuerdo al modelo: seguir
    let seguirUsuario = new Seguir({ perfil: perfilIngreso, seguido: perfilAseguir });
    // Guardar objeto en la BD
    seguirUsuario.save();
    return res.status(200).send({
      status: "ok",
      mensaje: "Seguimiento Exitoso !",
    });
  } catch (error) {
    return res.status(400).send({
      status: "error",
      mensaje: "No fue posible hacer la operación",
    });
  }
};

//dejar de seguir
const borrarSeguir = async (req, res) => {
  //obtener el id del usuario ingresado en el sistema
  let perfilIngreso = req.user.userId;
  // perfil de usuario que ya no quiero seguir
  let perfilseguido = req.params.id;

  try {
    let consulta = await Seguir.findOneAndDelete({ perfil: perfilIngreso, seguido: perfilseguido }).exec();
    return res.status(200).send({
      status: "ok",
      mensaje: "Ya no sigues ese perfil !",
    });
  } catch (error) {
    return res.status(400).send({
      status: "error",
      mensaje: error.message,
    });
    // hallar el perfil y borrarlo
  }
};
//listado de usuarios que sigo
const siguiendo = (req, res) => {
  //pagina inicial para paginacion
  let page;
  let id = req.params.id;
  if (req.params.page) {
    page = req.params.page;
  }
  page = parseInt(page);
  let itemsPerPage = 5;
  // necesario para el funcionamiento del moongoose paginate v2
  const query = { perfil: "651ea0b505a56b9730c1d31c" };
  const options = {
    sort: { _id: 1 },
    populate: { path: "perfil seguido", select: "nombre email" },
    page,
    limit: itemsPerPage,
  };

  Seguir.paginate(query, options)
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
        mensaje: "Listado de seguidores",
        perfiles: result.docs,
        page,
        limite: result.limit,
        totalpaginas: result.totalPages,
        registros: result.totalDocs,
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

/**
 * consulta de ejemplo usando populate para ejecutar una consulta con colecciones interconectadas 
 * en este caso seguir -->perfil
 @description
 @param {*} req peticion de entrada
 @param {*} res respuesta de la consulta
 @returns (consulta) objeto json con el resultado de la consulta
 */
const test = async (req, res) => {
  try {
    //obtener el id
    let id = req.params.id;
    let consulta = await Seguir.find({ perfil: id }).populate("seguido", "-rol -password -__v").exec();
    return res.status(200).send({
      status: "ok",
      mensaje: " Consulta exitosa !",
      consulta,
    });
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error en la consulta : " + error.message,
    });
  }
};
module.exports = {
  guardar,
  borrarSeguir,
  siguiendo,
  test,
};
