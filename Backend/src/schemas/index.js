const {SchemaComposer} = require('graphql-compose');

const schemaComposer = new SchemaComposer()

const {UserQuery, UserMutation} = require("./user");
const {ProjectsManagmentQuery, ProjectsManagmentMutation} = require("./projectsManagment");
const {InscriptionQuery, InscriptionMutation} = require("./inscriptions")


schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...ProjectsManagmentMutation,
    ...InscriptionMutation,
})


schemaComposer.Query.addFields({
    ...UserQuery,
    ...ProjectsManagmentQuery,
    ...InscriptionQuery,
})


module.exports = schemaComposer.buildSchema();
