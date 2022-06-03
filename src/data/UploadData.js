const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

module.exports = {

    async List() {
        return prisma.file.findMany();
    },

    async ListOne(id) {
        return prisma.file.findFirst({
            where: {
                id
            }
        })
    },

    async Create(url) {
        return prisma.file.create({
            data: {
                url
            }
        })
    },

    async Delete(id) {
        return prisma.file.delete({
            where: {
                id
            }
        })
    }
}