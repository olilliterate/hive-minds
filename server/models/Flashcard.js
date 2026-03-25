const db = require("../db/connect");

class Flashcard {
  constructor(row) {
    this.id = row.fc_id;
    this.term = row.term;
    this.def = row.def;
    this.cluster = row.cluster;
  }

  static async getRandomCluster() {
    const result = await db.query(
      `SELECT cluster
   FROM (SELECT DISTINCT cluster FROM flashcard) AS clusters
   ORDER BY RANDOM()
   LIMIT 1`,
    );

    if (result.rows.length === 0) {
      throw new Error("No clusters found");
    }

    return result.rows[0].cluster;
  }

  static async getCardsByCluster(cluster, limit = 4) {
    const result = await db.query(
      `SELECT * FROM flashcard
       WHERE cluster = $1
       ORDER BY RANDOM()
       LIMIT $2`,
      [cluster, limit],
    );

    if (result.rows.length === 0) {
      throw new Error("No flashcards found for cluster");
    }

    return result.rows.map((row) => new Flashcard(row));
  }

  static async getRandomClusterGame() {
    const cluster = await this.getRandomCluster();
    const cards = await this.getCardsByCluster(cluster, 4);

    return {
      cluster,
      cards,
    };
  }
}

module.exports = Flashcard;
