const db = require("../../../server/db/connect");
const Flashcard = require("../../../server/models/Flashcard");

describe("Flashcard", () => {
  beforeEach(() => jest.clearAllMocks());
  afterAll(() => jest.resetAllMocks());
  // getRandomCluster
  describe("getRandomCluster", () => {
    it("should return a random cluster", async () => {
      // Arrange
      jest.spyOn(db, "query").mockResolvedValueOnce({
        rows: [{ cluster: "Geography" }],
      });

      // Act
      const result = await Flashcard.getRandomCluster();

      // Assert
      expect(result).toBe("Geography");
      expect(db.query).toHaveBeenCalledWith(
        `SELECT cluster
   FROM (SELECT DISTINCT cluster FROM flashcard) AS clusters
   ORDER BY RANDOM()
   LIMIT 1`,
      );
    });

    it("should throw an error when no clusters exist", async () => {
      // Arrange
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [] });

      // Assert
      await expect(Flashcard.getRandomCluster()).rejects.toThrow(
        "No clusters found",
      );
    });
  });

  // getCardsByCluster
  describe("getCardsByCluster", () => {
    it("should return 4 flashcards for a cluster", async () => {
      // Arrange
      const mockRows = [
        { fc_id: 1, term: "T1", def: "D1", cluster: "Geo" },
        { fc_id: 2, term: "T2", def: "D2", cluster: "Geo" },
        { fc_id: 3, term: "T3", def: "D3", cluster: "Geo" },
        { fc_id: 4, term: "T4", def: "D4", cluster: "Geo" },
      ];

      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: mockRows });

      // Act
      const result = await Flashcard.getCardsByCluster("Geo");

      // Assert
      expect(result.length).toBe(4);
      expect(result[0]).toBeInstanceOf(Flashcard);
      expect(result[0].term).toBe("T1");

      expect(db.query).toHaveBeenCalledWith(
        `SELECT * FROM flashcard
       WHERE cluster = $1
       ORDER BY RANDOM()
       LIMIT $2`,
        ["Geo", 4],
      );
    });

    it("should throw error when no flashcards found", async () => {
      // Arrange
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [] });

      // Assert
      await expect(Flashcard.getCardsByCluster("Geo")).rejects.toThrow(
        "No flashcards found for cluster",
      );
    });
  });

  // getRandomClusterGame
  describe("getRandomClusterGame", () => {
    it("should return cluster and cards", async () => {
      // Arrange
      const mockCluster = "History";
      const mockCards = [
        new Flashcard({
          fc_id: 1,
          term: "T1",
          def: "D1",
          cluster: "History",
        }),
      ];

      jest
        .spyOn(Flashcard, "getRandomCluster")
        .mockResolvedValueOnce(mockCluster);

      jest
        .spyOn(Flashcard, "getCardsByCluster")
        .mockResolvedValueOnce(mockCards);

      // Act
      const result = await Flashcard.getRandomClusterGame();

      // Assert
      expect(result.cluster).toBe("History");
      expect(result.cards).toEqual(mockCards);

      expect(Flashcard.getRandomCluster).toHaveBeenCalled();
      expect(Flashcard.getCardsByCluster).toHaveBeenCalledWith(mockCluster, 4);
    });

    it("should throw error if cluster fetch fails", async () => {
      // Arrange
      jest
        .spyOn(Flashcard, "getRandomCluster")
        .mockRejectedValueOnce(new Error("DB error"));

      // Assert
      await expect(Flashcard.getRandomClusterGame()).rejects.toThrow(
        "DB error",
      );
    });
  });
});
