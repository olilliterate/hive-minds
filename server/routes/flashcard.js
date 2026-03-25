const { Router } = require("express");
const flashcardController = require("../controllers/flashcard");
const flashcardRouter = Router();

flashcardRouter.get("/", flashcardController.getRandomFlashcardGame);

module.exports = flashcardRouter;
