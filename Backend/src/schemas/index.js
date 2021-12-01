const {SchemaComposer} = require('graphql-compose');

const schemaComposer = new SchemaComposer()

const {UserQuery, UserMutation} = require("./user");
const {ProjectsManagmentQuery, ProjectsManagmentMutation} = require("./projectsManagment");


schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...ProjectsManagmentMutation,
})


schemaComposer.Query.addFields({
    ...UserQuery,
    ...ProjectsManagmentQuery,
})


module.exports = schemaComposer.buildSchema();
