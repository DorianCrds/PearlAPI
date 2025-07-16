const express = require('express');
const router = express.Router();
const RoleController = require('../../../controllers/roleController');
const authenticate = require("../../../middlewares/authMiddleware");
const authorizeRoles = require("../../../middlewares/roleMiddleware");
const validate = require("../../../middlewares/validateMiddleware");
const {roleSchema} = require("../../../validation/roleValidator");

router.use(authenticate);

router.get('/', authorizeRoles([1]), RoleController.getAllRoles);
router.get('/:id', authorizeRoles([1]), RoleController.getRoleById);
router.post('/', authorizeRoles([1]), validate(roleSchema), RoleController.createRole);
router.delete('/:id', authorizeRoles([1]), RoleController.deleteRole);


module.exports = router;