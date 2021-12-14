const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {
  composeWithMongoose
} = require("graphql-compose-mongoose");

const ProjectProgressSchema = new Schema({
    projectName: String,
    progressDate: Date,
    progressDescription: String,
    comments: String,
  },

  {
    versionKey: false
  }
);

module.exports = {
  ProjectProgressSchema: mongoose.model(
    "projectsProgress",
    ProjectProgressSchema
  ),
  ProjectProgressTC: composeWithMongoose(
    mongoose.model("projectsProgress", ProjectProgressSchema)
  ),
};