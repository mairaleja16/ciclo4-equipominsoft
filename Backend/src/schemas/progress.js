const {ProgressTC} = require("../model/progress");

const ProgressQuery = {
    progressById: ProgressTC.getResolver("findById"),
    progressByIds: ProgressTC.getResolver("findByIds"),
    progressOne: ProgressTC.getResolver("findOne"),
    progressMany: ProgressTC.getResolver("findMany"),
    progressCount: ProgressTC.getResolver("count"),
    progressConnection: ProgressTC.getResolver("connection"),
    progressPagination: ProgressTC.getResolver("pagination")
};

const ProgressMutation = {
    progressCreateOne: ProgressTC.getResolver("createOne"),
    progressCreateMany: ProgressTC.getResolver("createMany"),
    progressUpdateById: ProgressTC.getResolver("updateById"),
    progressUpdateOne: ProgressTC.getResolver("updateOne"),
    progresUpdateMany: ProgressTC.getResolver("updateMany"),
    progressRemoveById: ProgressTC.getResolver("removeById"),
    progressRemoveOne: ProgressTC.getResolver("removeOne"),
    progressRemoveMany: ProgressTC.getResolver("removeMany")
};

module.exports = { ProgressQuery, ProgressMutation };