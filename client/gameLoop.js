const {runMCQ} = require("./mcq")
const { runOOO} = require("./oddOneOut")
const { runImage } = require("./picture")

function chooseGame(previousGameId) {
  pass;
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

// start game play
let previousGameId = null; //add .push() so you can keep track of all of the id and table it came from
// object has keys for all the game types and the value is an array of the IDs
let counter = 0;

function startGameLoop() {
  // store the id of the previous mini game
  // load a game
  // consider clearing game logic
  const { chosenGame, gameId } = chooseGame(previousGameId);
  previousGameId = gameId;
  clearGameBoard()

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

module.exports = {
	startGameLoop,
	endGame,
	clearGameBoard,
	showResults,
	resetCounter,
	getCounter,
	chooseGame
}