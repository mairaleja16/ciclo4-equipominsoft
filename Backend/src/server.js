require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const logger = require("./core/logger");
require("./drivers/mongoConection");

const extensions = ({ context }) => {
    return {
        runTime: Date.now() - context.startTime,
    };
};

const port = process.env.PORT || 8080;

const app = express();
app.use(logger);


const graphqlSchema = require("./schemas/index");
app.use(
    "/graphql",
    graphqlHTTP((request) => {
        return {
            context: { startTime: Date.now() },
            graphiql: true,
            schema: graphqlSchema,
            extensions,
        };
    })
);

function main() {
    app.listen(port);
     console.log(`Server is running on port: ${port}!`);
 }
 main();