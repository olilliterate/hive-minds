const mcqController = require("../../../server/controllers/mcq");
const Mcq = require('../../../server/models/Mcq');

// We are mocking:
// .send()
// .json()
// .end()
// To create a mick response
// To also test the controller we need to mock our model

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockEnd = jest.fn();

const mockStatus = jest.fn(() => ({
    send: mockSend,
    json: mockJson,
    end: mockEnd
}))

const mockReq = {}

const mockRes = {status: mockStatus};

describe("mcq controller", () => {
    beforeEach(() => jest.clearAllMocks());
    afterAll(() => jest.resetAllMocks());

    describe("fetchRandomGame", () => {
        it("should return with a status code of 200", async () => {
            // Arrange
            const testGame = {game: "game"}
            jest.spyOn(Mcq, "getRandomGame").mockResolvedValue(testGame);
            // Act 
            await mcqController.fetchRandomGame(mockReq, mockRes);

            // Assert
            expect(Mcq.getRandomGame).toHaveBeenCalledTimes(1);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockSend).toHaveBeenCalledWith({ data: testGame })

        })
        it("should return with an error on failure 500", async () => {
            // Arrange
            jest.spyOn(Mcq, "getRandomGame").mockRejectedValue(new Error("Cannot find a random game (perhaps your DB is empty)"));

            await mcqController.fetchRandomGame(mockReq, mockRes);

            expect(Mcq.getRandomGame).toHaveBeenCalledTimes(1);
            expect(mockStatus).toHaveBeenCalledWith(500);
            expect(mockSend).toHaveBeenCalledWith({ error: "Cannot find a random game (perhaps your DB is empty)" })
        })
    })
})