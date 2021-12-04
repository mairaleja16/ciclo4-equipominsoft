const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { composeWithMongoose } = require("graphql-compose-mongoose");

const InscriptionSchema = new Schema(
    {
        studentName: String,
        projectName: String,
        admissionDate: Date,
        egressDate: Date,
        inscriptionStatus: {
          type: String,
          enum: ["aceptada", "rechazada"],
      },
});

module.exports = {
    InscriptionSchema: mongoose.model("inscriptions", InscriptionSchema),
    InscriptionTC: composeWithMongoose(mongoose.model("inscriptions", InscriptionSchema)),
  };
