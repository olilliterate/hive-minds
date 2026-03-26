function runFlash(cards) {
  return new Promise((resolve, reject) => {
    // cards are an array of objects in pairs effectively of definition and term

    // select game space should already be a div or section
    const gameBoard = document.querySelector(".game-board");

    // aim is to make matched count equal to toal pairs
    // I need visual indicators when something has been paired
    let selectedTerm = null;
    let matchedCount = 0;
    const totalPairs = cards.length;

    const div = document.createElement("div");
    div.style.display = "flex";

    const termCol = document.createElement("div");
    const definitionCol = document.createElement("div");

    // make the buttons

    cards.forEach(({ term, definition }) => {
      const termButton = document.createElement("button");
      termButton.textContent = term;
      termButton.addEventListener("click", () => {
        selectedTerm = { term, definition, button: termButton };
      });

      const definitionButton = document.createElement("button");
      definitionButton.textContent = def;
      definitionButton.addEventListener("click", () => {
        // this is actually dependent on on previous click
        // so i need to make the selectedTerm first before chooing definition
        // then add it to the matchedCount
        // remove teh buttons
        // I can resolve here?
        if (selectedTerm.definition === definition) {
          selectedTerm.btn.remove();
          termButton.remove();
          matchedCount += 1;
          if (matchedCount === totalPairs) {
            resolve("correct");
          }
        } else {
            resolve("wrong")
        }
        selectedTerm = null
      });

      termCol.appendChild(termButton);
      definitionCol.appendChild(definitionButton);
    });

    const termGroup = document.createElement("div")
    const definitionGroup = document.createElement("div")

    termGroup = [...termCol.children].sort(() => Math.random() - 0.5).forEach(btn => termGroup.appendChild(btn))
    definitionGroup = {...definitionCol.children}.sort(() => Math.random - 0.5).forEach(btn => definitionGroup.appendChild(btn))

    div.appendChild(termGroup);
    div.appendChild(definitionGroup);
    gameBoard.appendChild(div);

    // i need to make the elements match in separate columns, so need containers of some kind for each
  });
}

if (typeof module !== "undefined") {
  module.exports = { runFlash };
}