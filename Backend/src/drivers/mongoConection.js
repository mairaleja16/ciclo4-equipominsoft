/*require("dotenv").config();
const mongoose = require('mongoose');

const dbUsername = process.env.DB_USERN;
const dbPassword = process.env.DB_PASSWORD;
const dbUrl = process.env.DB_URL;


const mongoUrl = `mongodb+srv://${dbUsername}:${dbPassword}@${dbUrl}/projectDB`;

mongoose.set('runValidators', true);

const dbConnection = mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
  if (error) {
    console.log('Error conectando a mongo');
  } else {
    console.log('Conectado a mongo');
  }
});

module.exports = dbConnection;*/