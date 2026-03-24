const { Router } = require("express");
const userController = require("../controllers/user");

const userRouter = Router();

const authenticator = require("../middleware/authenticator");
const authorizeRoles = require("../middleware/authorization");

// Public routes for registration and login
userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);

// Protected route to get all students, only accessible by teacher roles
userRouter.get(
  "/students",
  authenticator,
  authorizeRoles("teacher"),
  userController.getStudents,
);

module.exports = userRouter;
