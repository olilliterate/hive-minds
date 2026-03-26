const Mcq = require("../models/Mcq");

const fetchRandomGame = async (req, res) => {
    //Is there data about used games in the body?
    let usedGames = []
    if(req.body){
        usedGames = req.body
    }
    try{
        const randomGame = await Mcq.getRandomGame(usedGames);
        res.status(200).send({ data: randomGame })
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

module.exports = {
    fetchRandomGame
}