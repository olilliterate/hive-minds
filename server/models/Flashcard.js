const db = require("../db/connect");
const randomFunction = require("../../helpers/randomChoice");

class Flashcard {
  constructor(row) {
    this.id = row.fc_id;
    this.term = row.term;
    this.def = row.def;
    this.cluster = row.cluster;
  }

  static async getRandomCluster(usedClusterNames = []) {
    const result = await db.query(`SELECT DISTINCT cluster FROM flashcard;`);

    if (result.rows.length === 0) {
      throw new Error("No clusters found");
    }

    const clusters = result.rows
      .map((row) => row.cluster)
      .filter((cluster) => !usedClusterNames.includes(cluster));

    if (clusters.length === 0) {
      throw new Error("Out of games");
    }

    return randomFunction(clusters);
  }

  static async getRandomClusterGame(usedClusterNames) {
    const cluster = await this.getRandomCluster(usedClusterNames);

    const result = await db.query(
      `SELECT * FROM flashcard
     WHERE cluster = $1
     ORDER BY RANDOM()
     LIMIT 4`,
      [cluster],
    );

    const cards = result.rows.map((row) => new Flashcard(row));

    return {
      cluster,
      cards,
    };
  }
}
module.exports = Flashcard;
