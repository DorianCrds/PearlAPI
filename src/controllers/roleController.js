const RoleModel = require('../models/roleModel');

const RoleController = {
    getAllRoles: async (req, res) => {
        try {
            const roles = await RoleModel.getAllRoles();
            res.json(roles);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getRoleById: async (req, res) => {
        try {
            const role = await RoleModel.getRoleById(req.params.id);
            if (!role) return res.status(404).json({ message: 'Role not found' });
            res.json(role);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createRole: async (req, res) => {
        try {
            const { label } = req.body;
            const newRole = await RoleModel.createRole(label);
            res.status(201).json(newRole);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteRole: async (req, res) => {
        try {
            await RoleModel.deleteRole(req.params.id);
            res.json({ message: 'Role deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = RoleController;