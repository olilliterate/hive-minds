// LEt's get ready to ruuuuummmmbbbbbllleeeee!!!!

if (typeof require !== "undefined") {
  const { startGameLoop } = require("../gameLoop");
}

document.querySelector("#startGame").addEventListener("click", () => {
  document.querySelector(".game-board").classList.remove("d-none");
  console.log("I work right");
  startGameLoop();
});

document.querySelector("#leaderboard").addEventListener("click", () => {
  // show leaderboard
  pass;
});
