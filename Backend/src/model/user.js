const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { composeWithMongoose } = require("graphql-compose-mongoose");

const UserSchema = new Schema(
    {
      name: String,
      email: String,
      phone: String,
      profileImage: String,
    },
    {
      timestamps: { createdAt: "created_at", update: "updated_at" },
    }
  );
  
  module.exports = {
    UserSchema: mongoose.model("users", UserSchema),
    UserTC: composeWithMongoose(mongoose.model("users", UserSchema)),
  };