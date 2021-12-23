const {SchemaComposer} = require('graphql-compose');

const schemaComposer = new SchemaComposer()

const {UserQuery, UserMutation} = require("./user");
const {ProjectsManagmentQuery, ProjectsManagmentMutation} = require("./projectsManagment");
const {InscriptionQuery, InscriptionMutation} = require("./inscriptions");
const {ProjectProgressQuery, ProjectProgressMutation} = require("./projectsProgress")

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...ProjectsManagmentMutation,
    ...InscriptionMutation,
    ...ProjectProgressMutation,
})


schemaComposer.Query.addFields({
    ...UserQuery,
    ...ProjectsManagmentQuery,
    ...InscriptionQuery,
    ...ProjectProgressQuery,
})


module.exports = schemaComposer.buildSchema();
