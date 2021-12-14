const express = require("express");
const app = express();
const {graphqlHTTP} = require("express-graphql");
const logger = require("./core/logger");
require("./drivers/mongoConection");

const extensions = ({context}) => {
    return{
        runTime: Date.now() - context.startTime,
    };
};

app.use(logger);
const port = process.env.PORT || 8080;



// app.listen(5001, async () => {
//     console.log("Server is running in port", 5001);
//     await mongoose.connect("mongodb+srv://minsoft:minsoftadmin@minsoft.ghbip.mongodb.net/projectDB", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
// });

// mongoose.connection.on(
//     "error",
//     console.error.bind(console, "MongoDB connection error")
// );

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
 main()