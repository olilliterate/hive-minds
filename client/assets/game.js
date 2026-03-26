// LEt's get ready to ruuuuummmmbbbbbllleeeee!!!!

if (typeof require !== "undefined") {
  const { gameDispatcher, startGameLoop } = require("../gameLoop");
}



document.querySelector("#startGame").addEventListener("click", async () => {
  document.querySelector(".game-board").classList.remove("d-none");
  console.log("I work right");
  await startGameLoop();
});

document.querySelector("#leaderboard").addEventListener("click", () => {
  // show leaderboard
  pass;
});
