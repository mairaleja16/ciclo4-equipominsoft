const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { composeWithMongoose } = require("graphql-compose-mongoose");

const UserSchema = new Schema(
  {
    mail: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      required: true,
      enum: ["estudiante", "lider", "administrador"],
    },
    status: {
      type: String,
      required: true,
      default: "pendiente",
      enum: ["pendiente", "autorizado", "no autorizado"],
    },
    userDNI: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }

  //{timestamps: { createdAt: "created_at", updateAt: "updated_at" }}
);

module.exports = {
  UserSchema: mongoose.model("users", UserSchema),
  UserTC: composeWithMongoose(mongoose.model("users", UserSchema)),
};
