export default {
    allDinos: async (parent, args, context) => {
        // console.log(prisma.prisma.dino)
        return await context.prisma.dinos.findMany({
            skip: args.offset,
            take: args.limit
        });
    }
}