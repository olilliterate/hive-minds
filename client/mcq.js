// so need to use API to get question

function runMCQ(question) {
  return new Promise((resolve, reject) => {
    // destructure questions
    const {
      question_body,
      correct_answer,
      prompt_1,
      prompt_2,
      prompt_3,
      prompt_4,
    } = question;

    // sort questions randomly
    //learnt a radnom sort trick
    const options = [prompt_1, prompt_2, prompt_3, prompt_4].sort(
      () => Math.random() - 0.5,
    );

    // select game space should already be a div or section
    const gameBoard = document.querySelector(".game-board");

    // make question
    const questionEl = document.createElement("h2");
    questionEl.textContent = question_body;
    gameBoard.appendChild(questionEl);

    // make options, loop
    options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;

      // add even listener for each one
      // needs to be for only these buttons
      button.addEventListener("click", () => {
        resolve(option === correct_answer ? "correct" : "wrong");
      });

      gameBoard.appendChild(button);
    });
  });
}
