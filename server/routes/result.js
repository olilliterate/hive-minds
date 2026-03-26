// This file sets up the routes for results

const { Router } = require("express");
const resultController = require("../controllers/result");
const resultRouter = Router();

resultRouter.get("/", resultController.index);
resultRouter.post("/", resultController.postResult);

module.exports = resultRouter
