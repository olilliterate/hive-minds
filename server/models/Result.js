const db = require('../db/connect')
class Result {
    constructor({name, streak}) {
        this.name = name;
        this.streak = streak;
    }
    static async getAllResults() {
        try{
            const resp = await db.query("SELECT user_data.name, result.streak FROM result LEFT JOIN user_date ON (user_data.user_id = result.user_id);");
            return resp.rows.map((ele) => new Result(ele));
        } catch (err) {
            throw new Error("Unable to fetch results")
        }

    }

    static async createResult(user_id, streak) {
        try {
            const resp = await db.query("INSERT INTO result (user_id, streak, date) VALUES ($1, $2, $3) RETURNING RETURNING *", [user_id, streak, Date.now()]);
            return resp
        } catch (err) {
            throw new Error("Error uploading your result")   ;
        }
    }
}

module.exports = Result;