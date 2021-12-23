const {ProjectProgressTC} = require("../model/projectsProgress");

const ProjectProgressQuery = {
    projectsProgressById: ProjectProgressTC.getResolver("findById"),
    projectsProgressByIds: ProjectProgressTC.getResolver("findByIds"),
    projectsProgressOne: ProjectProgressTC.getResolver("findOne"),
    projectsProgressMany: ProjectProgressTC.getResolver("findMany"),
    projectsProgressCount: ProjectProgressTC.getResolver("count"),
    projectsProgressConnection: ProjectProgressTC.getResolver("connection"),
    projectsProgressPagination: ProjectProgressTC.getResolver("pagination")
};

const ProjectProgressMutation = {
    projectsProgressCreateOne: ProjectProgressTC.getResolver("createOne"),
    projectsProgressCreateMany: ProjectProgressTC.getResolver("createMany"),
    projectsProgressUpdateById: ProjectProgressTC.getResolver("updateById"),
    projectsProgressUpdateOne: ProjectProgressTC.getResolver("updateOne"),
    projectsProgressUpdateMany: ProjectProgressTC.getResolver("updateMany"),
    projectsProgressRemoveById: ProjectProgressTC.getResolver("removeById"),
    projectsProgressRemoveOne: ProjectProgressTC.getResolver("removeOne"),
    projectsProgressRemoveMany: ProjectProgressTC.getResolver("removeMany")
};

module.exports = { ProjectProgressQuery, ProjectProgressMutation };