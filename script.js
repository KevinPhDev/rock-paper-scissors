const round = document.querySelector('#round')
const roundResult = document.querySelector('#roundResult')
const scoreTab = document.querySelector('#scoreTab')
const resetButton = document.querySelector('#reset')
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const gameResult = document.querySelector('#gameResult')

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = getComputerChoice();
let roundNumber = 0;

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1)
    if (randomNumber === 1) return "ROCK";
    if (randomNumber === 2) return "PAPER";
    if (randomNumber === 3) return "SCISSORS";
}

function playRound() {
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        roundResult.textContent = `You Lose! Paper beats Rock!`;
        return "Lose";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        roundResult.textContent = `You Win! Rock beats Scissors!`;
        return "Win";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        roundResult.textContent = `You Win! Paper beats Rock!`;
        return "Win";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        roundResult.textContent = `You Lose! Scissors beats Paper!`;
        return "Lose";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        roundResult.textContent = `You Lose! Rock beats Scissors!`;
        return "Lose";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        roundResult.textContent = `You Win! Scissors beats Paper!`;
        return "Win";
    } else if (playerSelection === computerSelection) {
        roundResult.textContent = `It's a Draw!`;
        return "Draw";
    }
}

function game() {
    if (playRound() === "Win") {
        playerScore++;
    } else if (playRound() === "Lose") {
        computerScore++;
    }
    round.textContent = `Round ${roundNumber}`;
    scoreTab.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

function disableButton() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function enableButton() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

function resetGame() {
    roundResult.textContent = 'Start Game';
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
    round.textContent = `Round ${roundNumber}`;
    scoreTab.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    gameResult.textContent = '';
}

rock.addEventListener('click', () => {
    playerSelection = "ROCK";
    computerSelection = getComputerChoice();
    game();
})

paper.addEventListener('click', () => {
    playerSelection = "PAPER";
    computerSelection = getComputerChoice();
    game();
})

scissors.addEventListener('click', () => {
    playerSelection = "SCISSORS";
    computerSelection = getComputerChoice();
    game();
})

resetButton.addEventListener('click', () => {
    resetGame();
})