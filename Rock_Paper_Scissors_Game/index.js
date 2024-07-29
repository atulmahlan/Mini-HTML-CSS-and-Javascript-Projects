const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById("result");
const playerscoreEl = document.getElementById("user-score");
const computerscoreEl = document.getElementById("computer-score");


let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
    });
});

function computerPlay() {
    const choices = ["rock" , "paper" , "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (
        (playerSelection === "rock" && 
        computerSelection === "scissors") ||
        (playerSelection === "paper" && 
        computerSelection === "rock") ||
        (playerSelection === "scissors" && 
        computerSelection === "rock") 
    ) {
        playerScore++;
        playerscoreEl.textContent = playerScore;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        computerScore++;
        computerscoreEl.textContent = computerScore;
        return "you lose! " + computerSelection + " beats " + playerSelection;
    }
}