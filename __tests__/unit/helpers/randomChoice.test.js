const randomChoice = require("../../../helpers/randomChoice");

describe('randomChoice', () => {
    it("returns an element of an array when passed an array", () => {
        //Arrange
        testArray = [2,1,5,3,1,2]
        //Act
        const testValue = randomChoice(testArray);
        //Assert
        expect(testValue).toBeGreaterThan(0);

    })
})