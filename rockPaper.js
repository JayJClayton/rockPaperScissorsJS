let computerChoice = "";
let playerChoice = "";

function getComputerChoice() {
    cChoice = Math.floor(Math.random() * (3 - 1) + 1);
    switch (cChoice){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
    function getPlayerChoice() {
        while (playerChoice == "") {
            playerChoice = prompt("Enter rock, paper, or scissors: ");
        }
        playerChoice = playerChoice.toLowerCase();
        while (playerChoice != "rock" || playerChoice != "paper" || playerChoice != "scissors" ||) {
            playerChoice = prompt("Please, enter rock, paper, or scissors: ");
            playerChoice = playerChoice.toLowerCase();
        }
            
        
    }
}