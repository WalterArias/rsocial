//Middleware para validar el jsonwebtoken

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const jwtToken = req.header("Authorization");
  if (!jwtToken) {
    return res.status(400).send({
      resultado: "error",
      mensaje: "Acceso denegado, No tiene token valido",
    });
  }
  try {
    const payload = jwt.verify(jwtToken, "SeCrEtO");
    req.user = payload;
    next();
  } catch (error) {
    return res.status(400).send({
      error: error.message,
    });
  }
};

module.exports = auth;
