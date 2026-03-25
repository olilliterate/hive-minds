/**
 * @jest-environment jsdom
 */

// import functions
const { startGameLoop,
	endGame,
	clearGameBoard,
	showResults,
	resetCounter,
	getCounter,
	chooseGame } = require("../../../client/gameLoop")
    const { runMCQ } = require("../../../client/mcq")

describe("Game Loop logic tests", () => {
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

    const clearSpy = jest.spyOn(startGameLoop, "clearGameBoard");
    const resultsSpy = jest.spyOn(startGameLoop, "showResults");

    endGame();

    expect(clearSpy).toHaveBeenCalled();
    expect(resultsSpy).toHaveBeenCalled();
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
    document.body.innerHTML = `
    <div class = 'game-board'>
        <div class='game-part'></div>
    </div>`;
    // act
    clearGameBoard();
    //assert
    expect(document.querySelector(".game-board").innerHTML).toBe("");
  });
});

describe("MCQ tests", () => {
  const mockQuestion = {
    question_body: "What is the capital of France?",
    correct_answer: "Paris",
    prompt_1: "London",
    prompt_2: "Berlin",
    prompt_3: "Madrid",
    prompt_4: "Paris",
  };

  beforeEach(() => jest.clearAllMocks());
  beforeEach(
    () => (document.body.innerHTML = "<div class = 'game-board'></div>"),
  );
  afterEach;

  test("returns correct when correct is clicked", async () => {
    // when answered correctly it should return back "correct"
  // we did mocking with DOM elements

  //arange
  const resultPromise = runMCQ(mockQuestion)

  const buttons = document.querySelectorAll("button")
  const correctButton = Array.from(buttons).find((b) => b.textContent === "Paris")
  
  //act
  correctButton.click()

  //assert
  const result = await resultPromise
  expect(result).toBe("correct")
  });
  

  test("retrun wrong when wrong", async () => {
    const resultPromise = runMCQ(mockQuestion)

  const buttons = document.querySelectorAll("button")
  const correctButton = Array.from(buttons).find((b) => b.textContent === "London")
  
  //act
  correctButton.click()

  //assert
  const result = await resultPromise
  expect(result).toBe("wrong")
  });
});

// get random game,
