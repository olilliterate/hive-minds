/**
 * @jest-environment jsdom
 */

const { runOOO } = require("../../../client/assets/oddOneOut")



describe("Image client tests", () => {

  const testQuestion = {
    question_body: "Which one is not a world Capital?",
    correct_answer: "Shanghai",
    prompt_1: "Dublin",
    prompt_2: "Mexico City",
    prompt_3: "Shanghai",
    prompt_4: "Rome",
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
  const resultPromise = runOOO(testQuestion)

  const buttons = document.querySelectorAll("button")
  const correctButton = Array.from(buttons).find((b) => b.textContent === "Shanghai")
  
  //act
  correctButton.click()

  //assert
  const result = await resultPromise
  expect(result).toBe("correct")
  });
  

  test("retrun wrong when wrong", async () => {
    const resultPromise = runOOO(testQuestion)

  const buttons = document.querySelectorAll("button")
  const correctButton = Array.from(buttons).find((b) => b.textContent === "Dublin")
  
  //act
  correctButton.click()

  //assert
  const result = await resultPromise
  expect(result).toBe("wrong")
  });

  test("renders the question and 4 buttons", () => {
    // arrange
    runOOO(testQuestion)

    // act - no action to do

    expect(document.querySelector("h2").textContent).toBe("Which one is not a world Capital?")
    expect(document.querySelectorAll("button").length).toBe(4)

  })
});

// get random game,

/*
tests I need:
- cirrect when correct
- wrong when wrong
- renders the buttons
*/