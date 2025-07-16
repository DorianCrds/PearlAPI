const prisma = require('../config/prisma');

const UserModel = {
    getAllUsers: async () => {
        return await prisma.user.findMany({
            where: { isActive: true },
            include: {
                role: true,
            },
        });
    },


    getUserById: async (id) => {
        return await prisma.user.findFirst({
            where: {
                id: Number(id),
                isActive: true,
            },
            include: {
                role: true,
            },
        });
    },


    createUser: async ({ firstname, lastname, email, password, roleId }) => {
        return await prisma.user.create({
            data: {
                firstname,
                lastname,
                email,
                password,
                role: roleId ? { connect: { id: roleId } } : undefined,
            },
        });
    },

    updateUser: async (id, updateData) => {
        return await prisma.user.update({
            where: { id: Number(id) },
            data: updateData,
        });
    },

    deleteUser: async (id) => {
        return await prisma.user.update({
            where: { id: Number(id) },
            data: { isActive: false },
        });
    },

};

module.exports = UserModel;