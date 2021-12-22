export default {
    async createDinosaur(parent, args, { db, pubsub }, info) {
        const dinosaur = await db.Dinosaur.create(args);
        pubsub.publish('dinosaurCreated', { dinosaurCreated: dinosaur });
        return dinosaur;
    }
}