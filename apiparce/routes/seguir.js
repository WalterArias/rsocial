// router de perfil
const express = require("express");
const router = express.Router();
const seguirControlador = require("../controllers/Seguir");
const auth = require("../controllers/auth");

router.post("/seguir/nuevo", auth, seguirControlador.guardar);

module.exports = router;
