const Flashcard = require("../models/Flashcard");

const getRandomFlashcardGame = async (req, res) => {
  const usedClusters = req.body || [];

  try {
    const game = await Flashcard.getRandomClusterGame(usedClusters);

    const body = {
      cluster: game.cluster,
      cards: game.cards.map((card) => ({
        term: card.term,
        definition: card.def,
      })),
    };

    res.status(200).json({ body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getRandomFlashcardGame,
};
