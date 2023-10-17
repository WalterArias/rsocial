const { Schema, model } = require("mongoose");
const PublicacionSchema = Schema({
  Usuario: {
    type: Schema.ObjectId,
    ref: "Usuario",
  },
  texto: {
    type: String,
    required: true,
  },
  file: String,
  creado: {
    type: Date,
    default: Date.now,
  },
});
module.exports = model("Publicacion", PublicacionSchema, "Publicacion");
