const db = require("../../../server/db/connect");
const Mcq = require("../../../server/models/Mcq");

describe("Mcq", () => {
    beforeEach(() => jest.clearAllMocks());
    afterAll(() => jest.resetAllMocks());
    describe("getRandomGame", () => {
        it("should return an Mcq question on a successful query" , async () => {
            //Arrange
            const mockGames = [
                { id: 1, question_body: 'What comes first in the alphabet?', answer: 1, prompt_one: "A",  prompt_two: "B", prompt_three: "C", prompt_four: "D",},
                { id: 1, question_body: 'What comes first in the alphabet?', answer: 2, prompt_one: "M",  prompt_two: "N", prompt_three: "L", prompt_four: "P",},
                { id: 1, question_body: 'What comes first in the alphabet?', answer: 3, prompt_one: "A",  prompt_two: "B", prompt_three: "eeq", prompt_four: "D",},
            ]
            jest.spyOn(db, "query").mockResolvedValueOnce({rows: mockGames})
            //Act
            const randomGame = await Mcq.getRandomGame();
            //Assert
            expect(randomGame).toBeInstanceOf(Mcq);
            expect(db.query).toHaveBeenCalledWith("SELECT * FROM mql_question;");
            })
        
        it("should throw an error when no games are available", async () => {
            //Arrange
            jest.spyOn(db, 'query').mockResolvedValueOnce({rows: []});
            //Assert
            await expect(Mcq.getRandomGame()).rejects.toThrow("Out of games to play!")
        })
    })
})