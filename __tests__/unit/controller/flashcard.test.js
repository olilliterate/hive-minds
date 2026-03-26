const Flashcard = require("../../../server/models/Flashcard");
const {
  getRandomFlashcardGame,
} = require("../../../server/controllers/flashcard");

describe("Flashcard Controller", () => {
  let req, res;

  beforeEach(() => {
    req = {};

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    jest.clearAllMocks();
  });

  describe("getRandomFlashcardGame", () => {
    it("should return flashcard game data (200)", async () => {
      // Arrange
      const mockGame = {
        cluster: "Geography",
        cards: [
          { term: "France", def: "Paris" },
          { term: "UK", def: "London" },
          { term: "Japan", def: "Tokyo" },
          { term: "India", def: "Delhi" },
        ],
      };

      jest
        .spyOn(Flashcard, "getRandomClusterGame")
        .mockResolvedValueOnce(mockGame);

      // Act
      await getRandomFlashcardGame(req, res);

      // Assert
      expect(Flashcard.getRandomClusterGame).toHaveBeenCalled();

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        body: {
          cluster: "Geography",
          cards: [
            { term: "France", definition: "Paris" },
            { term: "UK", definition: "London" },
            { term: "Japan", definition: "Tokyo" },
            { term: "India", definition: "Delhi" },
          ],
        },
      });
    });

    it("should return 500 if model throws error", async () => {
      // Arrange
      jest
        .spyOn(Flashcard, "getRandomClusterGame")
        .mockRejectedValueOnce(new Error("DB error"));

      // Act
      await getRandomFlashcardGame(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(500);

      expect(res.json).toHaveBeenCalledWith({
        error: "DB error",
      });
    });
  });
});
