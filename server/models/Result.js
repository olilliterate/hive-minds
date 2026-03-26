const db = require('../db/connect')
class Result {
    constructor({id, first_name, streak, date, user_id}) {
        this.id = id;
        this.first_name = first_name;
        this.streak = streak;
        this.date = date;
        this.user_id = user_id;
    }
    static async getAll() {
        
        const resp = await db.query("SELECT user_data.first_name, result.streak, result.id, result.date, result.user_id FROM result LEFT JOIN user_data ON (user_data.user_id = result.user_id);");
        if (resp.rows.length === 0) {
            throw new Error("No results available.")
        }
        return resp.rows.map((ele) => new Result(ele));

    }

    static async create(data) {
    
        if (!data.user_id) { 
            throw new Error("user_id is missing") 
        }

        if (!data.streak) {
        throw new Error("streak is missing")
        }
        
        const resp = await db.query("INSERT INTO result (user_id, streak, date) VALUES ($1, $2, $3) RETURNING *", [data.user_id, data.streak, new Date().toISOString()]);
        return new Result(resp.rows[0]);
    }
}


module.exports = Result;