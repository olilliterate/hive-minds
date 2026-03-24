const Result = require("../models/Result");

const index = async (req, res) => {
    try{
        const resultsData = await Result.getAll();
        res.status(200).send({ data: resultsData });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

const postResult = async (req, res) => {
    const data = req.body
    try{
        const postedRecord = await Result.create(data);
        res.status(201).send( {data: postedRecord} );
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
}

module.exports = {
    index,
    postResult
}