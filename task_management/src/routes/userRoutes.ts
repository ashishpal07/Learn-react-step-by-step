import express = require("express");

const router = express.Router();

import userController = require("../controllers/user");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

export default router;