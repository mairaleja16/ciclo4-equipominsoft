const {InscriptionTC} = require("../model/inscriptions");

const InscriptionQuery = {
    userById: InscriptionTC.getResolver("findById"),
    userByIds: InscriptionTC.getResolver("findByIds"),
    userOne: InscriptionTC.getResolver("findOne"),
    userMany: InscriptionTC.getResolver("findMany"),
    userCount: InscriptionTC.getResolver("count"),
    userConnection: InscriptionTC.getResolver("connection"),
    userPagination: InscriptionTC.getResolver("pagination")
};

const InscriptionMutation = {
    userCreateOne: InscriptionTC.getResolver("createOne"),
    userCreateMany: InscriptionTC.getResolver("createMany"),
    userUpdateById: InscriptionTC.getResolver("updateById"),
    userUpdateOne: InscriptionTC.getResolver("updateOne"),
    userUpdateMany: InscriptionTC.getResolver("updateMany"),
    userRemoveById: InscriptionTC.getResolver("removeById"),
    userRemoveOne: InscriptionTC.getResolver("removeOne"),
    userRemoveMany: InscriptionTC.getResolver("removeMany")
};

module.exports = { InscriptionQuery, InscriptionMutation };