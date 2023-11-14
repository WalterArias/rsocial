//controlador de publicaciones
let Publicacion = require("../models/Publicacion");

const crear = async (req, res) => {
  const params = req.body;
  if (!params.texto) {
    return res.status(404).send({
      status: "error",
      mensaje: "no hay datos en la peticion !",
    });
  }
  // instanciamos el objeto
  try {
    let publicacionNueva = new Publicacion(params);
    publicacionNueva.usuario = req.user.userId;
    publicacionNueva.save();
    return res.status(200).send({
      status: "ok",
      mensaje: "Exitosa",
      // publicacionNueva,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      mensaje: "No fue posible efectuar la operacion !",
      error: error.message,
    });
  }
};
const detallePublicacion = async (req, res) => {
  let idPublicacion = req.params.id;

  try {
    let consulta = await Publicacion.findById(idPublicacion).exec();
    return res.status(200).send({
      status: "ok",
      mensaje: "Operacion exitosa !",
      consulta,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      mensaje: "No es posible ejecutar la operación !",
      error: error.message,
    });
  }
};

//listar todas las publicaciones de los que sigo
const listarTodas = (req, res) => {
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

  Publicacion.paginate({}, options)
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
        publicaciones: result.docs,
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

// solo puedo eliminar mis publicaciones !
const eliminarPublicacion = async (req, res) => {
  let idPublicacion = req.params.id;

  try {
    let consulta = await Publicacion.findOneAndDelete({
      usuario: req.user.userId,
      _id: idPublicacion,
    }).exec();

    return res.status(200).send({
      status: "ok",
      mensaje: "Operacion exitosa !",
      consulta,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      mensaje: "No es posible ejecutar la operación !",
      error: error.message,
    });
  }
};

module.exports = { crear, detallePublicacion, eliminarPublicacion, listarTodas };
