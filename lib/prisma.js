import { PrismaClient } from "@prisma/client";

class PrismaLib {
    constructor() {
        if(!PrismaLib.instance) {
            // this.prisma = new PrismaClient();
            PrismaLib.instance = new PrismaClient();
        }
        return PrismaLib.instance;
    }
}

export default PrismaLib;
