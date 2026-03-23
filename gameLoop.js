function endGame() {
			showResults(counter, getLeaderboard)
		}

// start game play
let gameActive = true
let previousGameId = null

function startGameLoop() {
	let counter = 0
	// store the id of the previous mini game
	// load a game
	const { chosenGame, gameId } = chooseGame(previousGameId)
	previousGameId = gameId
		
	// run the choosen game
		
	runCGame(chosenGame, (result) => { // callback needs to return something
		if (result === "correct") {
		counter += 1
		startGameLoop()
		} else { 
			gameActive = false  // both of these feel redundant, but...
			endGame()
		}
	})
}


