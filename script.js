function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1)
    if (randomNumber === 1) return "ROCK";
    if (randomNumber === 2) return "PAPER";
    if (randomNumber === 3) return "SCISSORS";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return `You Lose! Paper beats Rock! Player: ${playerScore} Computer: ${computerScore}`;
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return `You Win! Rock beats Scissors! Player: ${playerScore} Computer: ${computerScore}`;
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return `You Win! Paper beats Rock! Player: ${playerScore} Computer: ${computerScore}`;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return `You Lose! Scissors beats Paper! Player: ${playerScore} Computer: ${computerScore}`;
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return `You Lose! Rock beats Scissors! Player: ${playerScore} Computer: ${computerScore}`;
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return `You Win! Scissors beats Paper! Player: ${playerScore} Computer: ${computerScore}`;
    } else if (playerSelection === computerSelection) {
        return `It's a Draw! Player: ${playerScore} Computer: ${computerScore}`;
    } else {
        return playerSelection;
    }
}

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = getComputerChoice();

const playerChoice = document.getElementsByClassName('playerChoice');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


const rock = document.querySelector('#rock');

rock.addEventListener('click', function(event) {
    playerSelection = "ROCK";
    computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    alert(roundResult);
})

paper.addEventListener('click', function(event) {
    playerSelection = "PAPER";
    computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    alert(roundResult);
})

scissors.addEventListener('click', function(event) {
    playerSelection = "SCISSORS";
    computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    alert(roundResult);
})