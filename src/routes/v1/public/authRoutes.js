const express = require('express');
const router = express.Router();
const { login, register, me } = require('../../../controllers/authController');
const validate = require("../../../middlewares/validateMiddleware");
const {registerSchema, loginSchema} = require("../../../validation/authValidator");

router.post('/login', validate(loginSchema), login);
router.post('/register', validate(registerSchema), register);

module.exports = router;
