require("dotenv").config();
const winston = require("winston");
const expressWinston = require("express-winston");
require("winston-mongodb");


const dbUsername = process.env.DB_USERN;
const dbPassword = process.env.DB_PASSWORD;
const dbUrl = process.env.DB_URL;

const logger = function (req, res, next) {
  expressWinston.logger({
    transports: [
      new winston.transports.MongoDB({
        db: `mongodb+srv://${dbUsername}:${dbPassword}@${dbUrl}/projectDB`,
        options: { useUnifiedTopology: true },
        metaKey: "meta",
      }),
    ],
    format: winston.format.json({ space: 2 }),
    meta: true, 
    msg: "HTTP {{req.method}} {{req.url}}", 
    expressFormat: true, 
    colorize: true, 
  });
  next();
};
module.exports = logger;