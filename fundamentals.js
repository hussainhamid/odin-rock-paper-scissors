
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return("it's a tie nobody won");
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return("paper beats rock you won");
        playerScore++;
    } 
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        return("rock beats scissor you won");
        playerScore++;
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        return("scissor cuts paper you won");
        playerScore++;
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        return("paper beats rock computer won");
    }
    else if (computerSelection === "rock" && playerSelection === "scissor") {
        return("rock beats scissor computer won");
    }
    else if (computerSelection === "scissor" && playerSelection === "paper") {
        return("scissor cuts paper computer won");
    }
}

console.log(getComputerChoice());



for (playerScore = 0; playerScore == 5; ) {
    console.log("playerwon");
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("");
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));