const winston = require("winston");
const expressWinston = require("express-winston");
require("winston-mongodb");

const logger = function (req, res, next) {
    expressWinston.logger({
        transports: [
            new winston.transports.MongoDB({
                db: "mongodb+srv://minsoft:minsoftadmin@minsoft.ghbip.mongodb.net/projectDB",
                options: {useUnifiedTopology: true},
                metaKey: "meta",
            }),
        ],
        format: winston.format.json({space: 5}),
        meta: true,
        msg: "HTTP {{req.method}} {{req.url}}",
        expressFormat: true,
        colorize: true,
    });
    next();
};
module.exports = logger;