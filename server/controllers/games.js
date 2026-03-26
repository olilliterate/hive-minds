const Mcq = require("../models/Mcq");
const Flashcard = require("../models/Flashcard");

const fetchRandomGameOfAnyType = async (req, res) => {
    const gamesPlayedObj = req.body;
    let payload;
    try {
        if (Math.random() < 0.75) {
            const mcqQuestion = await Mcq.getRandomGame(gamesPlayedObj.mcq);
            payload = { game_type: mcqQuestion.question_type };
            delete mcqQuestion.question_type;
            payload.game_content = mcqQuestion;
        } else {
            const flashCluster = await Flashcard.getRandomClusterGame(gamesPlayedObj.flash)
            payload = { game_type: "flash", game_content: flashCluster};
        }
        res.status(200).send(payload);
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}

module.exports = {
    fetchRandomGameOfAnyType
}
