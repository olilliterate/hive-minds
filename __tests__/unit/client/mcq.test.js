/**
 * @jest-environment jsdom
 */

const { runMCQ } = require("../../../client/assets/mcq")

describe("MCQ client tests", () => {
  const testQuestion = {
    question_body: "What country is home to the River Nile?",
    correct_answer: "Egypt",
    prompt_1: "Egypt",
    prompt_2: "Canada",
    prompt_3: "South Africa",
    prompt_4: "Brazil",
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
  const resultPromise = runMCQ(testQuestion)

  const buttons = document.querySelectorAll("button")
  const correctButton = Array.from(buttons).find((b) => b.textContent === "Egypt")
  
  //act
  correctButton.click()

  //assert
  const result = await resultPromise
  expect(result).toBe("correct")
  });
  

  test("retrun wrong when wrong", async () => {
    const resultPromise = runMCQ(testQuestion)

  const buttons = document.querySelectorAll("button")
  const correctButton = Array.from(buttons).find((b) => b.textContent === "Brazil")
  
  //act
  correctButton.click()

  //assert
  const result = await resultPromise
  expect(result).toBe("wrong")
  });

  test("renders the question and 4 buttons", () => {
    // arrange
    runMCQ(testQuestion)

    // act - no action to do

    expect(document.querySelector("h2").textContent).toBe("What country is home to the River Nile?")
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