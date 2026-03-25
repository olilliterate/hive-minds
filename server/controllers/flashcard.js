const Flashcard = require("../models/Flashcard");

const getRandomFlashcardGame = async (req, res) => {
  try {
    const game = await Flashcard.getRandomClusterGame();
    const formatted = {
      cluster: game.cluster,
      cards: game.cards.map((card) => ({
        term: card.term,
        definition: card.def,
      })),
    };

    res.status(200).json({
      formatted,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getRandomFlashcardGame,
};
