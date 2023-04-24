const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}; 

const btnRock = document.querySelector("#buttonR");
const btnPaper = document.querySelector("#buttonP");
const btnScissors = document.querySelector("#buttonS");

const pPlayerScore = document.querySelector(".player-Score");
const pComputerScore = document.querySelector(".computer-Score");

const pResult = document.querySelector(".result");

const pResultAgain = document.querySelector(".result-Again");

const btnAgain = document.getElementById("btn-Again");

pPlayerScore.textContent = (`Player : ${playerScore}`);
pComputerScore.textContent = (`Computer : ${computerScore}`);
pResult.innerHTML = ("¿Are you ready? <br> Choose Rock, Paper or Scissors!");

function playRound(playerSelection, computerSelection) {
    if (playerScore === 5 || computerScore === 5) {
        return; // Sale del juego si alguien ha ganado
    }

    if (playerSelection === computerSelection) {
        playerScore += 1;
        computerScore += 1;
        pResult.textContent = ("Wow, it's a tie!");
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") || 
        (playerSelection === "Paper" && computerSelection === "Rock") || 
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
            playerScore += 1;
            pResult.textContent = (`You win! ${playerSelection} beats ${computerSelection}`)
    } else {
        computerScore += 1;
        pResult.textContent = (`Oh no! ${playerSelection} can't beat ${computerSelection}`)
    }
    pPlayerScore.textContent = (`Player: ${playerScore}`);
    pComputerScore.textContent = (`Computer: ${computerScore}`);
    Winners();
}

function Winners() {
    if (playerScore === 5) {
        showDialog();
        pResultAgain.textContent = ("Amazing, You beat the computer!");
    } else if (computerScore === 5) {
        showDialog();
        pResultAgain.textContent = ("I'm sorry, You lost against the computer");
    } else if (playerScore === 5 && computerScore === 5) {
        showDialog();
        pResultAgain.textContent = ("Uf, It's a tie!");
    }
}

function showDialog() {
    document.getElementById("again").style.display = "block";
}

function closeDialog() {
    document.getElementById("again").style.display = "none";
}

btnRock.addEventListener("click", () => {
    if (playerScore === 5 || computerScore === 5) {
        return;
    }       
    let playerSelection = "Rock";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});
    
btnPaper.addEventListener("click", () => {
    if (playerScore === 5 || computerScore === 5) {
        return;
    }
    let playerSelection = "Paper";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});
    
btnScissors.addEventListener("click", () => {
    if (playerScore === 5 || computerScore === 5) {
        return;
    }
    let playerSelection = "Scissors";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

btnAgain.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    pPlayerScore.textContent = (`Player: ${playerScore}`);
    pComputerScore.textContent = (`Computer: ${computerScore}`);
    closeDialog();
});