const { Router } = require("express");
const userController = require("../controllers/user");

const userRouter = Router();

const authenticator = require("../middleware/authenticator");
const authorizeRoles = require("../middleware/authorization");

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);

module.exports = userRouter;
