function runFlashcard(card) {
  return new Promise((resolve, reject) => {
    const { term, def } = card;

    const gameBoard = document.querySelector(".game-board");

    // Create term display
    const termEl = document.createElement("h2");
    termEl.textContent = term;
    gameBoard.appendChild(termEl);

    // Create hidden definition
    const defEl = document.createElement("p");
    defEl.textContent = def;
    defEl.style.display = "none";
    gameBoard.appendChild(defEl);

    // Show definition button
    const showBtn = document.createElement("button");
    showBtn.textContent = "Show Definition";

    showBtn.addEventListener("click", () => {
      defEl.style.display = "block";
      showBtn.disabled = true;
    });

    gameBoard.appendChild(showBtn);

    // Action buttons
    const knewBtn = document.createElement("button");
    knewBtn.textContent = "I knew it";

    const didntKnowBtn = document.createElement("button");
    didntKnowBtn.textContent = "I didn't know";

    knewBtn.addEventListener("click", () => {
      resolve("correct"); // treat as correct
    });

    didntKnowBtn.addEventListener("click", () => {
      resolve("wrong");
    });

    gameBoard.appendChild(knewBtn);
    gameBoard.appendChild(didntKnowBtn);
  });
}


if (typeof module !== "undefined") {
  module.exports = { runFlashcard };
}


