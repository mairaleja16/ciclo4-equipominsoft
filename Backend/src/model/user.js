const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { composeWithMongoose } = require("graphql-compose-mongoose");

const UserSchema = new Schema(
    {
      mail: String,
      name: String,
      password: String,
      rol: {
        type: String,
        enum: ["estudiante", "lider", "administrador"], 
      },
      status: {
        type: String,
        default: "pendiente",
        enum: ["pendiente", "autorizado", "no autorizado"],
      },
      userDNI: String,
    },

    //{timestamps: { createdAt: "created_at", updateAt: "updated_at" }}
    );  
 
  module.exports = {
    UserSchema: mongoose.model("users", UserSchema),
    UserTC: composeWithMongoose(mongoose.model("users", UserSchema)),
  };