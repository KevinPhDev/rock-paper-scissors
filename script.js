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
    }
}

let playerScore = 0;
let computerScore = 0;

 function game() {
    const playerSelection = prompt("Enter Rock, Paper or Scissors").toUpperCase();
    const computerSelection = getComputerChoice();
    if (playRound(playerSelection, computerSelection).slice(0, 7) === "You Win") {
        playerScore++;
    }
    if (playRound(playerSelection, computerSelection).slice(0, 8) === "You Lose") {
        computerScore++;
    }
    console.log(playRound(playerSelection, computerSelection));
 }

 for (let i = 1; i <= 5; i++) {
    game();
    if (i == 5 && (playerScore > computerScore)) {
        console.log("Game Won!");
        break;
    }
    if (i == 5 && (playerScore < computerScore)) {
        console.log("Game Lost!");
        break;
    }
    if (i == 5 && (playerScore === computerScore)) {
        console.log("Game Draw");
        break;
    }
 }


