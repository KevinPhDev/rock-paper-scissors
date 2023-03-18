function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1)
    if (randomNumber === 1) return "ROCK";
    if (randomNumber === 2) return "PAPER";
    if (randomNumber === 3) return "SCISSORS";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "PAPER")
        return "You Lose! Paper beats Rock";
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS")
        return "You Win! Rock beats Scissors";
    if (playerSelection === "PAPER" && computerSelection === "ROCK")
        return "You Win! Paper beats Rock";
    if (playerSelection === "PAPER" && computerSelection === "SCISSORS")
        return "You Lose! Scissors beats Paper";
    if (playerSelection === "SCISSORS" && computerSelection === "ROCK")
        return "You Lose! Rock beats Scissors";
    if (playerSelection === "SCISSORS" && computerSelection === "PAPER")
        return "You Win! Scissors beats Paper";
    if (playerSelection === computerSelection)
        return "It's a draw";
}

const playerSelection = prompt("Enter Rock, Paper or Scissors").toUpperCase();
const computerSelection = getComputerChoice();



