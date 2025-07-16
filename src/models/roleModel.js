const prisma = require('../config/prisma');

const RoleModel = {
    getAllRoles: async () => {
        return await prisma.role.findMany();
    },

    getRoleById: async (id) => {
        return await prisma.role.findUnique({
            where: { id: Number(id) },
        });
    },

    createRole: async (label) => {
        return await prisma.role.create({
            data: { label },
        });
    },

    deleteRole: async (id) => {
        await prisma.role.delete({
            where: { id: Number(id) },
        });
    },
};

module.exports = RoleModel;