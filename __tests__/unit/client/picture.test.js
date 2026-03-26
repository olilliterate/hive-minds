/**
 * @jest-environment jsdom
 */

const { runImage } = require("../../../client/assets/picture")



describe("Picture client tests", () => {

  const testQuestion = {
    question_body: "Which is the Swiss national flag?",
    correct_answer:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/640px-Flag_of_Switzerland.svg.png",
    prompt_1:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/640px-Flag_of_Norway.svg.png",
    prompt_2:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/640px-Flag_of_Kenya.svg.png",
    prompt_3:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/640px-Flag_of_Ecuador.svg.png",
    prompt_4:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/640px-Flag_of_Switzerland.svg.png",
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
  const resultPromise = runImage(testQuestion)

  const buttons = document.querySelectorAll("img")
  const correctImg = Array.from(buttons).find((img) => img.src === "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/640px-Flag_of_Switzerland.svg.png")
  
  //act
  correctImg.click()

  //assert
  const result = await resultPromise
  expect(result).toBe("correct")
  });
  

  test("retrun wrong when wrong", async () => {
    const resultPromise = runImage(testQuestion)

  const buttons = document.querySelectorAll("img")
  const correctImg = Array.from(buttons).find((img) => img.src === "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/640px-Flag_of_Ecuador.svg.png")
  
  //act
  correctImg.click()

  //assert
  const result = await resultPromise
  expect(result).toBe("wrong")
  });

  test("renders the question and 4 buttons", () => {
    // arrange
    runImage(testQuestion)

    // act - no action to do

    expect(document.querySelector("h2").textContent).toBe("Which is the Swiss national flag?")
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