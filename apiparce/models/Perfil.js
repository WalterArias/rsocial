//orm de perfil

const { Schema, model } = require("mongoose");

const PerfilSchema = Schema(
  {
    apodo: {
      type: String,
      required: true,
      default: "llenar",
    },
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    foto: {
      type: String,
    },
    creado: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "aprendiz" }
);

module.exports = model("perfil", PerfilSchema, "perfil");