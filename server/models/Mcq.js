const db = require('../db/connect');
const randomChoice = require('../../helpers/randomChoice')

class Mcq {
    constructor({id, question_type, question_body, answer, prompt_one, prompt_two, prompt_three, prompt_four}) {
        this.id = id;
        this.question_type = question_type
        this.question_body = question_body;
        this.answer = answer;
        this.prompt_one = prompt_one;
        this.prompt_two = prompt_two;
        this.prompt_three = prompt_three;
        this.prompt_four = prompt_four;
    }

    static async getRandomGame(gameIDS = []) {
        const response = await db.query("SELECT * FROM mql_question;");
        //Get all mql questions
        const gameArr = response.rows.map((ele) => new Mcq(ele)); //Turn them into JS objects
        const filteredArray = gameArr.filter((ele) => !gameIDS.includes(ele.id)); //Filter games that have already been played
        if (filteredArray.length === 0) {
            throw new Error("Out of games to play!")
        }
        return randomChoice(filteredArray); // Return an unplayed game
    }
}

module.exports = Mcq;