const {InscriptionTC} = require("../model/inscriptions");

const InscriptionQuery = {
    inscriptionsById: InscriptionTC.getResolver("findById"),
    inscriptionsByIds: InscriptionTC.getResolver("findByIds"),
    inscriptionsOne: InscriptionTC.getResolver("findOne"),
    inscriptionsMany: InscriptionTC.getResolver("findMany"),
    inscriptionsCount: InscriptionTC.getResolver("count"),
    inscriptionsConnection: InscriptionTC.getResolver("connection"),
    inscriptionsPagination: InscriptionTC.getResolver("pagination")
};

const InscriptionMutation = {
    inscriptionsCreateOne: InscriptionTC.getResolver("createOne"),
    inscriptionsCreateMany: InscriptionTC.getResolver("createMany"),
    inscriptionsUpdateById: InscriptionTC.getResolver("updateById"),
    inscriptionsUpdateOne: InscriptionTC.getResolver("updateOne"),
    inscriptionsUpdateMany: InscriptionTC.getResolver("updateMany"),
    inscriptionsRemoveById: InscriptionTC.getResolver("removeById"),
    inscriptionsRemoveOne: InscriptionTC.getResolver("removeOne"),
    inscriptionsRemoveMany: InscriptionTC.getResolver("removeMany")
};

module.exports = { InscriptionQuery, InscriptionMutation };