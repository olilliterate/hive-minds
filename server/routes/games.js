// This file sets up the routes for mcq

const { Router } = require("express");
const gamesController = require("../controllers/games");
const gamesRouter = Router();

gamesRouter.get("/random", gamesController.fetchRandomGameOfAnyType);

module.exports = gamesRouter;