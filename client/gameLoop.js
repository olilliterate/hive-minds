
function chooseGame(previousGameId) {
	pass 
}

function clearGameBoard() {
	pass
}

function showResults(counter, getLeaderboard){
	pass
}


function endGame() {
	clearGameBoard()
	showResults(counter, getLeaderboard)
}

// start game play
let previousGameId = null
let counter = 0

function startGameLoop() {

	// store the id of the previous mini game
	// load a game
	// consider clearing game logic
	const { chosenGame, gameId } = chooseGame(previousGameId)
	previousGameId = gameId
		
	// run the choosen game
		
	runCGame(chosenGame, (result) => { // callback needs to return something
		if (result === "correct") {
		counter += 1
		startGameLoop()
		} else {
			endGame()
		}
	})
}


