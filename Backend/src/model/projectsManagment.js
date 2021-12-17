const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { composeWithMongoose } = require("graphql-compose-mongoose");

const ProjectSchema = new Schema(
  {
    projectName: String,
    overallObjetives: String,
    specificObjetives: String,
    budget: String,
    startDate: { 
      type:Date,
      default: Date.now()
    },
    finishDate: Date,
    userDNI: String,
    name: String,
    projectStatus: {
      type: String,
      default: "inactivo",
      enum: ["activo", "inactivo"],
    },
    projectPhase: {
      type: String,
      default: null,
      enum: ["iniciado", "desarrollo", "terminado"],
    },
  },
  {
    versionKey:false
  }
);

module.exports = {
  ProjectsManagmentSchema: mongoose.model("projectsManagment", ProjectSchema),
  ProjectsManagmentTC: composeWithMongoose(mongoose.model("projectsManagment", ProjectSchema)
  ),
};
