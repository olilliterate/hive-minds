let runMCQ, runOOO, runImage, runFlash

if (typeof require !== "undefined") {
  const { runMCQ } = require("./mcq");
  const { runOOO } = require("./oddOneOut");
  const { runImage } = require("./picture");
  const { runFlashcard } = require("./flashcard");
  const { runFlash } = require("./flash");
}

const mockMCQ = {
  game_type: "mcq",
  game_content: {
    question_body: "What is the capital of France?",
    correct_answer: "Paris",
    prompt_1: "London",
    prompt_2: "Berlin",
    prompt_3: "Madrid",
    prompt_4: "Paris",
  },
};

const mockOOO = {
  game_type: "ooo",
  game_content: {
    question_body: "Which one of these is not Africa?",
    correct_answer: "China",
    prompt_1: "Nigeria",
    prompt_2: "Zambia",
    prompt_3: "China",
    prompt_4: "Morocco",
  },
};

const mockPicture = {
  game_type: "picture",
  game_content: {
    question_body: "Which one of these is a river?",
    correct_answer:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amazon_CIAT_%282%29.jpg/1280px-Amazon_CIAT_%282%29.jpg",
    prompt_1:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Mount_St._Helens_erupting_blue.jpg",
    prompt_2:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amazon_CIAT_%282%29.jpg/1280px-Amazon_CIAT_%282%29.jpg",
    prompt_3:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/Frederic_Edwin_Church_-_Aurora_Borealis_-_Google_Art_Project.jpg",
    prompt_4:
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Grand_Canyon_South_Rim_at_Sunset.jpg",
  },
};

const mockFlash = {
  game_type: "flash",
  game_content: [
    {
      term: "river",
      definition:
        "a river is a flowing body of water that moves towards the sea",
      cluster: "rivers",
    },
    {
      term: "source",
      definition: "the place where a river begins",
      cluster: "rivers",
    },
    {
      term: "mouth",
      definition: "the place where a river meets the sea or another river",
      cluster: "rivers",
    },
    {
      term: "tributary",
      definition: "a smaller river that joins a larger river",
      cluster: "rivers",
    },
  ],
};

const mocks = [mockMCQ, mockOOO, mockPicture];

const mockResult = [
  { name: "Obi", score: 99, date: "26/03/2026" },
  { name: "Charlie", score: 2, date: "01/01/2000" },
];

let previousGameId = null; //add .push() so you can keep track of all of the id and table it came from
// object has keys for all the game types and the value is an array of the IDs
let counter = 0;

// think this is happening backend now, so need to think about extracting the key to tell me which game to choose

const gameDispatcher = {
  mcq: runMCQ,
  ooo: runOOO,
  picture: runImage,
  flash: runFlash,
};

/*
function chosenGame(gameType, gameQuestion) {

  return gameDispatcher[gameType](gameQuestion)
}
*/
async function alternativeGetGame() {
  const mockReturn = mocks[Math.floor(Math.random() * mocks.length)];
  const { game_type, game_content } = mockReturn;
  return await gameDispatcher[game_type](game_content);
}

function clearGameBoard() {
  const node = document.querySelector(".game-board");
  node.innerHTML = "";
}

function postResults(studentResults) {
  // do they want object or just array
  return [me(), counter];
  pass;
}

async function getLeaderboard() {
  return mockResult;
}

async function showResults() {
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

  const leaderboard = await getLeaderboard();

  leaderboard.forEach((item) => {
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

async function endGame() {
  //postResults();
  console.log("gameover", counter);
  clearGameBoard();
  showResults();
  resetCounter();
}

function resetCounter() {
  return (counter = 0);
}

async function startGameLoop() {
  // start game play
  // change previvous gameID to hold all past games in MCQ and flashcard keys with arrays for all IDs used

  // store the id of the previous mini game
  // load a game
  // consider clearing game logic
  //const { chosenGame, gameId } = chooseGame(previousGameId);
  //previousGameId = gameId;
  clearGameBoard();

  // run the choosen game

  //const result = chosenGame("mcq", mockQuestion)
  const result = await alternativeGetGame();

  if (result === "correct") {
    counter += 1;
    startGameLoop();
  } else {
    endGame(); //endGame();
  }
}

if (typeof module !== "undefined") {
  module.exports = {
    alternativeGetGame,
    clearGameBoard,
    postResults,
    getLeaderboard,
    showResults,
    endGame,
    resetCounter,
    startGameLoop,
  };
}

/*
flash
flash is special
expecting an object with question type and question body, use question type to decide the gane
*/
