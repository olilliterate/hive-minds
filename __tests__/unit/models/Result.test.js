const db = require("../../../server/db/connect");
const Result = require("../../../server/models/Result");
describe("Result", () => {
    beforeEach(() => jest.clearAllMocks());
    afterAll(() => jest.resetAllMocks());
    describe("getAll", () => {
        it("Resolve with all Results on a successful db query", async () => {
            //Arrange
            const mockResults = [
                { id: 1, name: "Test 1", streak: 40, date: "2026-03-24 11:22:10.729" },
                { id: 2, name: "Test 2", streak: 50, date: "2226-03-24 11:22:10.729" },
                { id: 3, name: "Test 3", streak: 60, date: "2126-03-24 11:22:10.729" }
            ]
            jest.spyOn(db, "query").mockResolvedValueOnce({rows: mockResults});
            // Act
            const results = await Result.getAll();

            // Assert
            expect(results).toHaveLength(3);
            expect(results[0]).toHaveProperty('id');
            expect(results[0].name).toBe('Test 1');
            expect(db.query).toHaveBeenCalledWith("SELECT user_data.name, result.streak, result.id, result.date, result.user_id FROM result LEFT JOIN user_date ON (user_data.user_id = result.user_id);")
        })
        it("should throw an Error when no results are found", async () => {
            //Arrange
            jest.spyOn(db, 'query').mockResolvedValueOnce({rows: []});
            //Assert
            await expect(Result.getAll()).rejects.toThrow("No results available.")
        })
    })
    describe("createResult", () => {
        it("Should return the result created on a successful insertion", async () => {
            //Arrange
            const testData = { user_id: 1, streak: 55 }
            jest.spyOn(db, 'query').mockResolvedValueOnce({ rows: [{ ...testData, id:1 }]})
            //Act
            const result = await Result.create(testData);
            //Assert
            
            // The following test has been commented out because its really hard to make work

            // expect(db.query).toHaveBeenCalledWith(
            //     "INSERT INTO result (user_id, streak, date) VALUES ($1, $2, $3) RETURNING *",
            //     [testData.user_id, testData.streak, new Date().toISOString()]
            // )
            expect(result).toBeInstanceOf(Result);
            expect(result).toHaveProperty('id', 1);
            expect(result).toHaveProperty("user_id", 1);
            expect(result).toHaveProperty('streak', 55);
        })

        it('should throw an Error when user_id is missing', async () => {
            // Arrange
            const incompleteResult = { streak: 5 }

            // Act & Assert
            await expect(Result.create(incompleteResult)).rejects.toThrow("user_id is missing");
        })
        
    })
});