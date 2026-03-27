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
    questionEl.classList.add("display-5", "fw-bold", "text-center", "my-4")
    questionEl.textContent = question_body;
    gameBoard.appendChild(questionEl);

    const row = document.createElement("div")
    row.classList.add("row", "g-3")

    // make options, loop
    options.forEach((option) => {
      const col = document.createElement("div")
      col.classList.add("col-6")


      const button = document.createElement("button");
      button.classList.add("btn", "p-1", "w-100")

      const img = document.createElement("img");
      img.src = option;
      img.classList.add("img-fluid", "rounded")
      img.style.height= "200px"
      img.style.objectFit = "cover"
      button.appendChild(img);


      // add even listener for each one
      // needs to be for only these buttons
      button.addEventListener("click", () => {
        resolve(option === correct_answer ? "correct" : "wrong");
      });

      col.appendChild(button)
      row.appendChild(col)

      
    });
    gameBoard.appendChild(row);
  });
}

if (typeof module !== "undefined") {
  module.exports = { runImage };
}
