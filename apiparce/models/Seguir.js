//orm de seguir a un perfil
const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const SeguirSchema = Schema(
  {
    perfil: {
      type: Schema.ObjectId,
      ref: "Perfil",
    },
    seguido: {
      type: Schema.ObjectId,
      ref: "Perfil",
    },
    creado_en: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "seguir" }
);
SeguirSchema.plugin(mongoosePaginate);
module.exports = model("seguir", SeguirSchema, "seguir");
