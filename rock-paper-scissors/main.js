var content = document.getElementById('content');


var rockPaperScissors = {

    rock: ["paper", "scissors", "rock"],
    paper: ["scissors", "rock", "paper"],
    scissors: ["rock", "paper", "scissors"]
}
var winner = '';
var computerChoice = "";
var playerChoice = "";
var playerScore = 0;
var computerScore = 0;
var count;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function play(choice) {
    var choiceConditions = rockPaperScissors[`${choice}`];
    computerChoice = getRandomInt(3);
    console.log(computerChoice)
    computerChoice = choiceConditions[computerChoice];
    playerChoice = choice
    if (choice == computerChoice) {
        winner = 'Tie!'
    } else if (computerChoice == choiceConditions[0]) {
        winner = 'Player wins!';
        playerScore += 1;
    } else if (computerChoice == choiceConditions[1]) {
        winner = 'Computer Wins!';
        computerScore += 1;
    }
    return content.innerHTML = renderGame();
}

function resetGame() {
    count = prompt("How many rounds would you like?", "3")
    winner = '';
    computerChoice = "";
    playerChoice = "";
    playerScore = 0;
    computerScore = 0
    return content.innerHTML = renderGame();
}

function renderGame() {
    count = parseInt(count)
    if (playerScore > (count / 2) || computerScore > (count / 2)) {
        return `<div class="container d-flex flex-column justify-content-start align-items-center">
            <button onclick="resetGame()" class="btn btn-danger">Reset</button>
            <h1 class="text-center mx-4 align-self-center" id="winner">${winner}</h1>
             <div class="d-flex justify-content-center">
            <h1 class="text-left mx-4  align-self-start">Player : ${playerScore}</h1>
            <h1 class="text-right mx-4 align-self-end">Computer : ${computerScore}</h1>
            </div>`
    } else {
        // Change this render function to use the "game" parameter
        return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
        <h4>Choose your weapon:</h4>
        <h4>This is a best of: ${count}</h4>
        <div class="w-50 text-center">
                <button class="btn btn-primary" onclick="play('rock')">Rock</button>
                <button class="btn btn-primary" onclick="play('paper')">Paper</button>
                <button class="btn btn-primary" onclick="play('scissors')">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5" "playerChoice">You played: <b>${playerChoice.toUpperCase()}</b></div>
                <div class="m-5" id="computerChoice">The computer played: <b>${computerChoice.toUpperCase()}</b></div>
            </div>
            <div class="d-flex justify-content-center">
            <h1 class="text-left mx-4  align-self-start">${playerScore}</h1>
            <h1 class="text-center mx-4 align-self-center" id="winner">${winner}</h1>
            <h1 class="text-right mx-4 align-self-end">${computerScore}</h1>
            </div>
        </div>
    `
    }
}
11