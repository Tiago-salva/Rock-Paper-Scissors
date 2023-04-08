const choices = ["Piedra", "Papel", "Tijeras"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let result = choices[Math.floor(Math.random() * choices.length)];
    return result;
} 

let playerChoice = ""
let computerChoice = ""

function playRound(playerSelection, computerSelection) {
    
    console.log(`Tu elegiste: ${playerChoice}`)
    console.log(`La computadora eligio: ${computerChoice}`)
    
    if (playerSelection === computerSelection) {
        playerScore += 1;
        computerScore += 1;
        console.log("Es un empate!");
    } else if (
        (playerSelection === "Piedra" && computerSelection === "Tijeras") || 
        (playerSelection === "Papel" && computerSelection === "Piedra") || 
        (playerSelection === "Tijeras" && computerSelection === "Papel")) {
            playerScore += 1;
            console.log(`Ganaste! ${playerSelection} le gana a ${computerSelection}`)
    } else {
        computerScore += 1;
        console.log(`Perdiste! ${computerSelection} le gana a ${playerSelection}`)
    }
    console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)
    console.log("---------------------------------------------")
}

while (playerScore != 5 && computerScore != 5) {
    playerChoice = prompt("Elige Piedra, Papel o Tijeras!").toLowerCase() 
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    computerChoice = getComputerChoice()
    playRound(playerChoice, computerChoice)
}

function Winners() {
    if (playerScore === 5) {
        console.log("Le haz ganado a la maquina!")
    } else if (computerScore === 5) {
        console.log("La computadora ha ganado ]: ")
    } else if (playerScore === 5 && computerScore === 5) {
        console.log("Es un empate!")
    }
}

Winners()