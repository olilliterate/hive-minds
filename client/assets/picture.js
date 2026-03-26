function runImage(question) {
  return new Promise((resolve, reject) => {
    // destructure questions
    const {
      question_body,
      correct_answer,
      prompt_1, //these prompts should hodepfully be imgURL
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
      const img = document.createElement("img");
      img.src = option;
      button.appendChild(img);

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
  module.exports = { runImage };
}
