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
    questionEl.classList.add("display-5", "fw-bold", "text-center", "my-4")
    questionEl.textContent = question_body;
    gameBoard.appendChild(questionEl);

    // make the row then column and add col to row

    // make options, loop
    options.forEach((option) => {
      const button = document.createElement("button");
      button.classList.add("btn", "btn-primary", "btn-primary", "btn-lg", "m-2", "w-100")
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

if (typeof module !== "undefined") {
    module.exports = {runMCQ}
}