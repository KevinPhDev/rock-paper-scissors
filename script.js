const roundNumber = document.querySelector('#roundNumber')
const roundResult = document.querySelector('#roundResult')
const scoreTab = document.querySelector('#scoreTab')
const resetButton = document.querySelector('#reset')
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = getComputerChoice();

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1)
    if (randomNumber === 1) return "ROCK";
    if (randomNumber === 2) return "PAPER";
    if (randomNumber === 3) return "SCISSORS";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore++;
        roundResult.textContent = `You Lose! Paper beats Rock!`;
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore++;
        roundResult.textContent = `You Win! Rock beats Scissors!`;
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore++;
        roundResult.textContent = `You Win! Paper beats Rock!`;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore++;
        roundResult.textContent = `You Lose! Scissors beats Paper!`;
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore++;
        roundResult.textContent = `You Lose! Rock beats Scissors!`;
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore++;
        roundResult.textContent = `You Win! Scissors beats Paper!`;
    } else if (playerSelection === computerSelection) {
        roundResult.textContent = `It's a Draw!`;
    } else {
        roundResult.textContent = playerSelection;
    }
}

rock.addEventListener('click', function(event) {
    playerSelection = "ROCK";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

paper.addEventListener('click', function(event) {
    playerSelection = "PAPER";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

scissors.addEventListener('click', function(event) {
    playerSelection = "SCISSORS";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

