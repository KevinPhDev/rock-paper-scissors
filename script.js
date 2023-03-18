function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1)
    if (randomNumber === 1) return "Rock";
    if (randomNumber === 2) return "Paper";
    if (randomNumber === 3) return "Scissors";
}