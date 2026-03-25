// LEt's get ready to ruuuuummmmbbbbbllleeeee!!!!

const {startGameLoop} = require("../gameLoop")

document.querySelector("#startGame").addEventListener("click", () => {
    document.querySelector(".game-board").classList.remove("d-none")
    startGameLoop()
})

document.querySelector("#leaderboard").addEventListener("click", () => {
    // show leaderboard
    pass
})