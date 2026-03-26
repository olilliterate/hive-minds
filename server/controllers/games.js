const Mcq = require("../models/Mcq");

const fetchRandomGameOfAnyType = async (req, res) => {
    const gamesPlayedObj = req.body;
    try {
        if (Math.random() < 0.75) {
            const mcqQuestion = await Mcq.getRandomGame(gamesPlayedObj.mcq);
            const payload = { game_type: mcqQuestion.question_type };
            delete mcqQuestion.question_type;
            payload.game_content = mcqQuestion;
        } else {

        }
    } catch (err) {
        
    }
}

module.exports = {
    fetchRandomGameOfAnyType
}
