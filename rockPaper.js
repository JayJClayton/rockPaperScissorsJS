let computerChoice = "";
let playerChoice = "";
let win = 0;
let loss = 0;
let draw = 0;
let randomChoice = 0;

gameLoop();

function getComputerChoice() {
    
    randomChoice = Math.floor(Math.random() * (3) + 1) ;
    
    switch (randomChoice){
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
}
function getPlayerChoice() {
    let inputLoop = true;    
    playerChoice = "";
   
    playerChoice = prompt("Enter rock, paper, or scissors: ");
    
    playerChoice = playerChoice.toLowerCase();
    
    while (inputLoop == true) {
        switch (playerChoice) {
            case "rock":
                inputLoop = false;
                break;
            case "paper":
                inputLoop = false;
                break;
            case "scissors":
                inputLoop = false;
                break;
            default:
                playerChoice = prompt("Enter rock, paper, or scissors: ");
                playerChoice = playerChoice.toLowerCase();
                break;
        }
        
    }

        return;
    
}
function playRound(playerChoice, computerChoice) {
    console.log("Computer chose: " + computerChoice  + " Player chose: " + playerChoice);
    if (playerChoice === "rock" && computerChoice === "scissors") {
        
        console.log("1 win");
        win = (win + 1);
    }
    else if (playerChoice=== "rock" && computerChoice === "rock") {
        draw = (draw + 1);
        console.log("1 draw");
    }
    else if (playerChoice=== "paper" && computerChoice === "rock") {
        console.log("1 win");
        win = (win + 1);

    }
    else if (playerChoice=== "paper" && computerChoice === "paper") {
        draw = (draw + 1);
        console.log("1 draw");
    }
    else if (playerChoice=== "scissors" && computerChoice === "paper") {
        console.log("1 win");
        win = (win + 1);
    }
    else if (playerChoice=== "scissors" && computerChoice === "scissors") {
        draw = (draw + 1);
        console.log("1 draw");
    }
    else {
        console.log("1 loss");
        loss = loss + 1;
    }
   
    return;
}

function decideWinner() {
    console.log("Wins;Losses;Draws: " + win + ";" + loss + ";" + draw);
    if (win > 2) {
        console.log("You have won the game: ");
        gameLoop();
    }
    else if (draw > 2) {
        console.log("The game was a tie: ");
        gameLoop();
    }
    else if(loss > 2){
        console.log("You have lost the game: ");

        gameLoop();
    }
    else {
        console.log("Error");
        return;
    }
}
function gameLoop() {
    gameCount = 0;
    win = 0;
    loss = 0;
    draw = 0;
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
             
        getPlayerChoice();
             
        playRound(playerChoice, computerChoice,);

    }
    decideWinner();
}