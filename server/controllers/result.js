const Result = require("../models/Result");

const index = async (req, res) => {
    try{
        const resultsData = await Result.getAll();
        res.status(200).send(resultsData);
    } catch (err) {
        res.status(500).send({error: err.message })
    }
}

const postResult = async (req, res) => {
    const data = req.body
    try{
        const postedRecord = await Result.create(data);
        res.status(201).send(postedRecord)
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}