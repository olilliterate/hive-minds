function randomChoice(arr) {
    //Math.random creates a pseudo random number between zero and one. We the multiple by length and times by length to get a random index
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

module.exports = randomChoice;