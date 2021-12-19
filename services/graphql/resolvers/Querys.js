export default {
    getAllDinos: async (parent, args, { models }) => {
        return await models.Dinos.findAll();
    }
}