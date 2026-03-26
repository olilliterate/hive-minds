const db = require("../../../server/db/connect");
const Flashcard = require("../../../server/models/Flashcard");
const randomFunction = require("../../../helpers/randomChoice");

jest.mock("../../../helpers/randomChoice", () => jest.fn());

describe("Flashcard", () => {
  beforeEach(() => jest.clearAllMocks());
  afterAll(() => jest.resetAllMocks());

  describe("getRandomCluster", () => {
    it("should return a random cluster", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({
        rows: [{ cluster: "Geography" }, { cluster: "History" }],
      });

      randomFunction.mockReturnValue("Geography");

      const result = await Flashcard.getRandomCluster();

      expect(result).toBe("Geography");

      expect(db.query).toHaveBeenCalledWith(
        `SELECT DISTINCT cluster FROM flashcard;`,
      );

      expect(randomFunction).toHaveBeenCalledWith(["Geography", "History"]);
    });

    it("should throw an error when no clusters exist", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [] });

      await expect(Flashcard.getRandomCluster()).rejects.toThrow(
        "No clusters found",
      );
    });

    it("should throw error when all clusters are used", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({
        rows: [{ cluster: "Geography" }],
      });

      await expect(Flashcard.getRandomCluster(["Geography"])).rejects.toThrow(
        "Out of games",
      );
    });
  });
  describe("getRandomClusterGame", () => {
    it("should return cluster and cards", async () => {
      jest
        .spyOn(Flashcard, "getRandomCluster")
        .mockResolvedValueOnce("History");

      jest.spyOn(db, "query").mockResolvedValueOnce({
        rows: [
          {
            fc_id: 1,
            term: "T1",
            def: "D1",
            cluster: "History",
          },
        ],
      });

      const result = await Flashcard.getRandomClusterGame([]);

      expect(result.cluster).toBe("History");

      expect(result.cards).toHaveLength(1);
      expect(result.cards[0]).toBeInstanceOf(Flashcard);

      expect(db.query).toHaveBeenCalledWith(
        expect.stringContaining("SELECT * FROM flashcard"),
        ["History"],
      );
    });

    it("should throw error if getRandomCluster fails", async () => {
      jest
        .spyOn(Flashcard, "getRandomCluster")
        .mockRejectedValueOnce(new Error("DB error"));

      await expect(Flashcard.getRandomClusterGame([])).rejects.toThrow(
        "DB error",
      );
    });
  });
});
