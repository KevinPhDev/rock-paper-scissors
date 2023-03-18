function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1)
    if (randomNumber === 1) return "Rock";
    if (randomNumber === 2) return "Paper";
    if (randomNumber === 3) return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper")
        return "You lose, paper beats rock";
    if (playerSelection === "Rock" && computerSelection === "Scissors")
        return "You win, rock beats scissors";
    if (playerSelection === "Paper" && computerSelection === "Rock")
        return "You win, paper beats rock";
    if (playerSelection === "Paper" && computerSelection === "Scissors")
        return "You lose, scissors beats paper";
    if (playerSelection === "Scissors" && computerSelection === "Rock")
        return "You lose, rock beats scissors";
    if (playerSelection === "Scissors" && computerSelection === "Paper")
        return "You win, scissors beats paper";
    if (playerSelection === computerSelection)
        return "It's a draw";
}

const playerSelection;
const computerSelection = getComputerChoice();
