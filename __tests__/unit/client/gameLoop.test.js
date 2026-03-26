/**
 * @jest-environment jsdom
 */

// import functions
const {
  alternativeGetGame,
  clearGameBoard,
  postResults,
  getLeaderboard,
  showResults,
  endGame,
  resetCounter,
  startGameLoop,
} = require("../../../client/assets/gameLoop");

describe("Game Loop logic tests", () => {

  //const mockMCQ = jest.fn().mockResolvedValue("correct")
  beforeEach(() => jest.clearAllMocks());
  beforeEach(() => {
    document.body.innerHTML = "<div class='game-board'></div>"
    resetCounter()
  });
  // need before each to reset the counter
  /* not needed yet
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
*/
  //test("runGame counter increment increases");
  // TODO: emulate DOM for counter
  // this feels weird, but it is a names thing I wrote
  // need to mock runGame to return "correct"

  test("end game works", () => {
    // removes game elements the shows results
    // need to use jest spy
    // TODO: emulate DOM for end game
    // TODO: decide if this needs to be split up
    document;
    const clearSpy = jest.spyOn(gameLoop, "clearGameBoard");
    const showSpy = jest.spyOn(gameLoop, "showResults");

    gameLoop.endGame();

    expect(clearSpy).toHaveBeenCalled();
    expect(showSpy).toHaveBeenCalled();
  });

  test("showResults calls getLeaderboard and redners score", () => {
    // I want to test the elements that are being produced
    // mock getLeaderboard
    const mockGetLeaderBoard = jest.fn().mockReturnValue([
      { name: "Alice", score: 5 },
      { name: "Tom", score: 3 },
    ]);

    // need to emmulate DOM elements

    document.body.innerHTML = "<div id='results'></div>";
    showResults(4, mockGetLeaderBoard); // (counter, getLeaderBoard)

    expect(mockGetLeaderBoard).toHaveBeenCalled();
  });

  //test("getLeaderBoard produces");

  test("clearGame Board removes the elements", () => {
    // I want to clear what is already there
    // need DOM pieces
    // can you just write DOM structures in JS?
    //arranfe
    // act
    clearGameBoard();
    //assert
    expect(document.querySelector(".game-board").innerHTML).toBe("");
  });
});
