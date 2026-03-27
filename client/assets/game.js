// LEt's get ready to ruuuuummmmbbbbbllleeeee!!!!
/*
if (typeof require !== "undefined") {
  const { startGameLoop } = require("../assets/gameLoop");
}
*/


document.querySelector("#startGame").addEventListener("click", async () => {
  document.querySelector(".mt-5").classList.add("d-none")

  document.querySelector(".game-board").classList.remove("d-none");
  
  await startGameLoop();
  console.log("eventlistener working");
});

document.querySelector("#leaderboard").addEventListener("click", () => {
  // show leaderboard
  pass;
});
