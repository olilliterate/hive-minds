// import functions

describe("Game Loop logic tests", () => {
  // need before each to reset the counter

  test("chosen returns a valid game on first call", () => {
    //Arrange and Act
    const result = chooseGame(null);

    expect(result).toHaveProperty(chosenGame);
    expect(result).toHaveProperty(gameId);
  });

  test("chosen game does not return previous game", () => {
    //Arrange
    const { gameId } = chooseGame(null);

    //Act
    const { gameId: secondId } = chooseGame(gameId);

    //Assert
    expect(secondId).not.toBe(gameId);
  });

  test("runGame counter increment increases");
  // this feels weird, but it is a names thing I wrote
  // need to mock runGame to return "correct"


  test("end game works", () => {
    // removes game elements the shows results
    // need to use jest spy

    const clearSpy = jest.spyOn(startGameLoop, "clearGameBoard");
    const resultsSpy = jest.spyOn(startGameLoop, "showResults")

    endGame()

    expect(clearSpy).toHaveBeenCalled()
    expect(resultsSPy).toHaveBeenCalled()
  });

  test("showResults calls getLeaderboard and redners score", () =>{
    // I want to test the elements that are being produced
    // mock getLeaderboard
    const mockGetLeaderBoard = jest.fn().mockReturnValue([
        {name: "Alice", score: 5},
        {name: "Tom", score: 3}
    ])

    // need to emmulate DOM elements

    document.body.innerHTML = "<div id='results'></div>"
    showResults(4, mockGetLeaderBoard) // (counter, getLeaderBoard)

    expect(mockGetLeaderBoard).toHaveBeenCalled()
  });

  test("getLeaderBoard produces")
  

  test("clearGame Board removes the elements", () => {
    // I want to clear what is already there
    // need DOM pieces
    // can you just write DOM structures in JS?
    //arranfe
    document.body.innerHTML = `
    <div class = 'game-board'>
        <div class='game-part'></div>
    </div>`
    // act
    clearGameBoard()
    //assert
    expect(document.querySelector(".game-board")).toBeNull

  });
  
});

describe("MCQ tests", () => {
  test("MCQ test returns back correct");
  // when answered correctly it should return back "correct"
  // we did mocking with DOM elements

  //arange

  //act

  //assert



  test("retrun wrong when wrong");
});

// get random game,
