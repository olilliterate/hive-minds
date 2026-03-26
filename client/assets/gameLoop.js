if (typeof require !== "undefined") {
  const { runMCQ } = require("./mcq");
  const { runOOO } = require("./oddOneOut");
  const { runImage } = require("./picture");
}

// think this is happening backend now, so need to think about extracting the key to tell me which game to choose
/*
function chooseGame(previousGameId) {
  pass;
}
  */
// need a game dispatcher
// i need to feed it the argument
// so maybe changing to a function and cahining the parameter into a method
// so needs to take in 2 params gameType and question
const gameDispatcher = {
  mcq: () => runMCQ(question),
  ooo: () => runOOO(question),
  picture: () => runImage(question)
}

function chosenGame(gameType,gameQuestion) {
  const question = gameDispatcher[gameType]

}

function clearGameBoard() {
  const node = document.querySelector(".game-board");
  node.innerHTML = "";
}

function showResults(counter, getLeaderboard) {
  const gameBoard = document.querySelector(".game-board");

  // counter result
  const counterEl = document.createElement("h1");
  counterEl.textContent = counter;
  gameBoard.appendChild(counterEl);

  // table set up
  const table = document.createElement("table");

  //header
  const tableHeader = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["Name", "Score", "Date"].forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });

  tableHeader.appendChild(headerRow);
  table.appendChild(tableHeader);

  // rows
  const tableBody = document.createElement("tbody");

  getLeaderboard.forEach((item) => {
    const row = document.createElement("tr");

    // tabke contents
    const name = document.createElement("td");
    name.textContent = item.name;

    const score = document.createElement("td");
    score.textContent = item.score;

    const date = document.createElement("td");
    date.textContent = item.date;

    row.appendChild(name);
    row.appendChild(score);
    row.appendChild(date);
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);

  gameBoard.appendChild(table);
}

function endGame() {
  clearGameBoard();
  showResults(counter, getLeaderboard);
}

function resetCounter() {
  return (counter = 0);
}

function getCounter() {
  return counter;
}

function postScore() {
  // use getme to get userid
  // capture counter and use as streak
}

function startGameLoop() {
  // start game play
  let previousGameId = null; //add .push() so you can keep track of all of the id and table it came from
  // object has keys for all the game types and the value is an array of the IDs
  let counter = 0;
  // store the id of the previous mini game
  // load a game
  // consider clearing game logic
  const { chosenGame, gameId } = chooseGame(previousGameId);
  previousGameId = gameId;
  clearGameBoard();

  // run the choosen game

  runGame(chosenGame, (result) => {
    // callback needs to return something
    if (result === "correct") {
      counter += 1;
      startGameLoop();
    } else {
      endGame();
    }
  });
}

if (typeof module !== "undefined") {
  module.exports = {
    startGameLoop,
    endGame,
    clearGameBoard,
    showResults,
    resetCounter,
    getCounter,
    //chooseGame,
  };
}

/*
mcq
ooo
image
flash

expecting an object with question type and question body, use question type to decide the gane
*/
