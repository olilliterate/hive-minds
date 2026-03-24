// This file sets up the routes for mcq

const { Router } = require("express");
const mcqController = require("../controllers/mcq");
const mcqRouter = Router();

mcqRouter.get("/", mcqController.fetchRandomGame);

module.exports = mcqRouter;