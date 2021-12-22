// import PrismaLib from 'lib/prisma';

export default async function (req, res) {
    // const prisma = new PrismaLib();
    // find all dinos by Name and delete name is repeated
    // const dinos = await prisma.dino.findMany({});
    function getUniqueList(list) {
        return [...new Map(list.map(item => [item.name, item])).values()];
    }
    // await prisma.dinos.insertMany({
    //     data: getUniqueList(dinos)
    // });
    res.json(getUniqueList([{}]));
}
