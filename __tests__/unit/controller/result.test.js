const resultController = require("../../../server/controllers/result");
const Result = require("../../../server/models/Result");
const Mcq = require('../../../server/models/Result');

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

const mockRes = {status: mockStatus};

describe("Result controller", () => {
    beforeEach(() => jest.clearAllMocks());
    afterAll(() => jest.resetAllMocks());

    describe("index", () => {
        it("should return with a status code of 200", async () => {
            const testResult = ['r1', 'r2'];
            jest.spyOn(Result, "getAll").mockResolvedValue(testResult);

            await resultController.index(null, mockRes)

            expect(Result.getAll).toHaveBeenCalledTimes(1);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockSend).toHaveBeenCalledWith({ data: testResult });
        })
        it("should return an error upon failure", async () => {
            jest.spyOn(Result, 'getAll').mockRejectedValue(new Error("Something happened to your db"));

            await resultController.index(null, mockRes)

            expect(Result.getAll).toHaveBeenCalledTimes(1);
            expect(mockStatus).toHaveBeenCalledWith(500);
            expect(mockSend).toHaveBeenCalledWith({ error: "Something happened to your db"});
        })
    })
    describe("postResult", () => {
        it("Should return a new Result with a 201 status code", async () => {
            let testResult = { user_id: 1, name: "Test 1", streak: 40, date: "2026-03-24 11:22:10.729" };
            const mockReq = { body: testResult };
            jest.spyOn(Result, "create").mockResolvedValue(new Result(testResult));

            await resultController.postResult(mockReq, mockRes);

            expect(Result.create).toHaveBeenCalledTimes(1);
            expect(mockStatus).toHaveBeenCalledWith(201);
        })
        it("Should return an error if creation failed", async () => {
            let testResult = { user_id: 1, name: "Test 1", streak: 40, date: "2026-03-24 11:22:10.729" };
            const mockReq = { body: testResult };
            
            jest.spyOn(Result, "create").mockRejectedValue(new Error("Failed to post result"));

            await resultController.postResult(mockReq, mockRes)

            expect(Result.create).toHaveBeenCalledTimes(1);
            expect(mockStatus).toHaveBeenCalledWith(400);
            expect(mockSend).toHaveBeenCalledWith({ error: "Failed to post result" })
        })

    })
})

