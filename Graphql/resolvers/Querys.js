export default {
    allDinos: async (parent, args, context) => {
        // console.log(prisma.prisma.dino)
        return await context.prisma.dinos.findMany({
            skip: args.offset,
            take: args.limit
        });
    },
    allTypeDino: async (parent, args, context) => {
        // console.log(prisma.prisma.dino)
        return await context.prisma.dinos.findMany({
            where: {
                diet: args.diet
            },
            skip: args.offset,
            take: args.limit
        });
    },
    allOmnivorous: async (parent, args, context) => {
        // console.log(prisma.prisma.dino)
        return await context.prisma.dinos.findMany({
            where: {
                diet: 'omnivorous'
            },
            skip: args.offset,
            take: args.limit
        });
    },
    allHerbivorous: async (parent, args, context) => {
        // console.log(prisma.prisma.dino)
        return await context.prisma.dinos.findMany({
            where: {
                diet: 'herbivorous'
            },
            skip: args.offset,
            take: args.limit
        });
    },
    allCarnivorous: async (parent, args, context) => {
        // console.log(prisma.prisma.dino)
        return await context.prisma.dinos.findMany({
            where: {
                diet: 'carnivorous'
            },
            skip: args.offset,
            take: args.limit
        });
    },
}