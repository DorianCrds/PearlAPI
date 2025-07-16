const express = require('express');
const router = express.Router();
const { login, register, me } = require('../../../controllers/authController');
const authenticate = require("../../../middlewares/authMiddleware");
const authorizeRoles = require("../../../middlewares/roleMiddleware");
const validate = require("../../../middlewares/validateMiddleware");
const {registerSchema, loginSchema} = require("../../../validation/authValidator");

router.post('/login', validate(loginSchema), login);
router.post('/register', validate(registerSchema), register);
router.post('/me', authenticate, authorizeRoles([1, 2, 3]), me);

module.exports = router;