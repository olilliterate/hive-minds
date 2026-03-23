// writing tests

describe("Game Loop logic tests", () => {
    test("chosen game does not return previous game", () => {
        const { gameId } = chooseGame(null)
        const { gameId: secondId } = chooseGame(gameId)
        expect(secondId).not.toBe(gameId)
    })

    test("runGame counter increment increases") 
    // this feels weird, but it is a names thing I wrote

    test("end game works")
    // removes game elements the shows results
    // 

    test("showResults returns gets leaderboard data")
    // I want to test the elements that are being produced

    test("clearGame Board removes the elements")
    // I want to clear what is already there

})

describe("MCQ tests", () => {
    test("MCQ test returns back correct")
    // when answered correctly it should return back "correct"

    test("retrun wrong when wrong")
})

// get random game,