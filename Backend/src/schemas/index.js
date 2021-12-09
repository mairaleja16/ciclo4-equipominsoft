const {SchemaComposer} = require('graphql-compose');

const schemaComposer = new SchemaComposer()

const {UserQuery, UserMutation} = require("./user");
const {ProjectsManagmentQuery, ProjectsManagmentMutation} = require("./projectsManagment");
const {InscriptionQuery, InscriptionMutation} = require("./inscriptions");
const {ProgressQuery, ProgressMutation} = require("./progress")

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...ProjectsManagmentMutation,
    ...InscriptionMutation,
    ...ProgressMutation,
})


schemaComposer.Query.addFields({
    ...UserQuery,
    ...ProjectsManagmentQuery,
    ...InscriptionQuery,
    ...ProgressQuery,
})


module.exports = schemaComposer.buildSchema();
