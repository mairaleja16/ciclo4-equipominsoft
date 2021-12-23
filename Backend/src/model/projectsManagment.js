const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { composeWithMongoose } = require("graphql-compose-mongoose");

const ProjectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    overallObjetives:{
      type: String,
      required: true,
    },
    specificObjetives: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
    startDate: {
      required: true, 
      type:Date,
      default: Date.now()
    },
    finishDate: {
      type: Date,
      required: true,
    },
    userDNI: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    projectStatus: {
      required: true,
      type: String,
      default: "inactivo",
      enum: ["activo", "inactivo"],
    },
    projectPhase: {
      required: true,
      type: String,
      default: "",
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
