const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { composeWithMongoose } = require("graphql-compose-mongoose");

const ProgressSchema = new Schema(
    {
        projectName: String,
        progressDate: Date,
        progressDescription: String,
        comments: String,
      },
);

module.exports = {
    ProgressSchema: mongoose.model("progress", ProgressSchema),
    ProgressTC: composeWithMongoose(mongoose.model("progress", ProgressSchema)),
  };
