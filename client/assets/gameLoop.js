
if (typeof require !== "undefined") {
  const { runMCQ } = require("./mcq");
  const { runOOO } = require("./oddOneOut");
  const { runImage } = require("./picture");
  const { runFlashcard } = require("./flashcard")
}

const mockQuestion = {
    question_body: "What is the capital of France?",
    correct_answer: "Paris",
    prompt_1: "London",
    prompt_2: "Berlin",
    prompt_3: "Madrid",
    prompt_4: "Paris",
  }

const mockReturn = {
  game_type: "mcq",
  game_content: {
    question_body: "What is the capital of France?",
    correct_answer: "Paris",
    prompt_1: "London",
    prompt_2: "Berlin",
    prompt_3: "Madrid",
    prompt_4: "Paris"
  }
}

// think this is happening backend now, so need to think about extracting the key to tell me which game to choose

function getGame(previousGameId) {
  pass;
}
// need a game dispatcher
// i need to feed it the argument
// so maybe changing to a function and cahining the parameter into a method
// so needs to take in 2 params gameType and question
/*
const gameDispatcher = {
  mcq: runMCQ,
  ooo: runOOO,
  picture: runImage,
  flash: runFlashcard
};


function chosenGame(gameType, gameQuestion) {

  return gameDispatcher[gameType](gameQuestion)
}
*/
function alternativeGetGame(playedObj = {mockReturn}) {
  const game = mockReturn     //await fetch(...)
  
  if (game_type == "mcq") {
      runMCQ(game_content)
    }

  if (game.ok) {
    const question = mockReturn

    const {game_type, game_content } = question

    if (game_type == "ooo") {
      runOOO(game_content)
    }
    else if (game_type == "mcq") {
      runMCQ(game_content)
    }

    else if (game_type == "picture") {
      runImage(game_content)
    }

    else if (game_type == "flash") {
      runFlashcard(game_content)
    }

    else { console.log("Unknown game type")}
  } else {
    console.log("game")
  }

}



function clearGameBoard() {
  const node = document.querySelector(".game-board");
  node.innerHTML = "";
}
/*
function postResults(studentResults) { // do they want object or just array
  return [me(), counter]
  pass
}

function showResults(counter, getLeaderboard) {
  // get request for leaderboard

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
*/
function endGame() {
  postResults()
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
  // change previvous gameID to hold all past games in MCQ and flashcard keys with arrays for all IDs used
  let previousGameId = null; //add .push() so you can keep track of all of the id and table it came from
  // object has keys for all the game types and the value is an array of the IDs
  let counter = 0;
  // store the id of the previous mini game
  // load a game
  // consider clearing game logic
  //const { chosenGame, gameId } = chooseGame(previousGameId);
  //previousGameId = gameId;
  clearGameBoard();

  // run the choosen game

  //const result = chosenGame("mcq", mockQuestion)
  const result = alternativeGetGame()

  if (result === "correct") {
      counter += 1;
      startGameLoop();
    } else {
      console.log("gameover") //endGame();
    }
}

if (typeof module !== "undefined") {
  module.exports = {
    startGameLoop,
    endGame,
    clearGameBoard,
    showResults,
    resetCounter,
    getCounter,
    //gameDispatcher,
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
