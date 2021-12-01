const {ProjectsManagmentTC} = require("../model/projectsManagment");
const {ProjectsManagmentSchema} = require("../model/projectsManagment");

ProjectsManagmentTC.addResolver({
    name: "create",
    kind: "mutation",
    type: ProjectsManagmentTC.getResolver("createOne").getType(),
    args: ProjectsManagmentTC.getResolver("createOne").getArgs(),
    resolve: async ({source, args, context, info}) => {
        const book = await ProjectsManagmentSchema.create(args.record);
        return {
            record: book,
            recordId: ProjectsManagmentTC.getRecordIdFn()(book),
        };
    }

})

const ProjectsManagmentQuery = {
    projectsManagmentById: ProjectsManagmentTC.getResolver("findById"),
    projectsManagmentByIds: ProjectsManagmentTC.getResolver("findByIds"),
    projectsManagmentOne: ProjectsManagmentTC.getResolver("findOne"),
    projectsManagmentMany: ProjectsManagmentTC.getResolver("findMany"),
    projectsManagmentCount: ProjectsManagmentTC.getResolver("count"),
    projectsManagmentConnection: ProjectsManagmentTC.getResolver("connection"),
    projectsManagmentPagination: ProjectsManagmentTC.getResolver("pagination"),
}

const ProjectsManagmentMutation = {
    projectsManagmentWithFile: ProjectsManagmentTC.getResolver("create"), //BOOK O ProjectsManagmentTC?
    projectsManagmentCreateOne: ProjectsManagmentTC.getResolver("createOne"), 
    projectsManagmentCreateMany: ProjectsManagmentTC.getResolver("createMany"), 
    projectsManagmentUpdateById: ProjectsManagmentTC.getResolver("updateById"), 
    projectsManagmentUpdateOne: ProjectsManagmentTC.getResolver("updateOne"), 
    projectsManagmentUpdateMany: ProjectsManagmentTC.getResolver("updateMany"), 
    projectsManagmentRemoveById: ProjectsManagmentTC.getResolver("removeById"), 
    projectsManagmentRemoveOne: ProjectsManagmentTC.getResolver("removeOne"), 
    projectsManagmentRemoveMany: ProjectsManagmentTC.getResolver("removeMany"), 

}

module.exports = {ProjectsManagmentQuery: ProjectsManagmentQuery, ProjectsManagmentMutation: ProjectsManagmentMutation}