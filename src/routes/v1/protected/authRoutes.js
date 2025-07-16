const router = express.Router();
const authenticate = require("../../../middlewares/authMiddleware");
const authorizeRoles = require("../../../middlewares/roleMiddleware");
const {me} = require("../../../controllers/authController");
const express = require("express");

router.post('/me', authenticate, authorizeRoles([1, 2, 3]), me);

module.exports = router;