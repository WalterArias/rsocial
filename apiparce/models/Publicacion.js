const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const PublicacionSchema = Schema(
  {
    usuario: {
      type: Schema.ObjectId,
      ref: "Perfil",
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
  },
  { collection: "Publicacion" }
);
PublicacionSchema.plugin(mongoosePaginate);
module.exports = model("Publicacion", PublicacionSchema, "Publicacion");
