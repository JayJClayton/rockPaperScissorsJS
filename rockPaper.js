let computerChoice = "";
let playerChoice = "";
let win = 0;
let loss = 0;
let draw = 0;
let randomChoice = 0;

gameLoop();

function getComputerChoice() {
    
    randomChoice = Math.floor(Math.random() * (3) + 1) ;
    console.log(randomChoice);
    switch (randomChoice){
        case 1:
            computerChoice = "rock";
            console.log(computerChoice);
            break;
        case 2:
            computerChoice = "paper";
            console.log(computerChoice);
            break;
        case 3:
            computerChoice = "scissors";
            console.log(computerChoice);
            break;
    }
}
function getPlayerChoice() {
    let inputLoop = false;    
    playerChoice = "";
   
    playerChoice = prompt("Enter rock, paper, or scissors: ");
    
    playerChoice = playerChoice.toLowerCase();
    console.log("here: ",playerChoice);
    while (inputLoop = false) {
        switch (playerChoice) {
            case "rock":
                inputLoop = true;
                break;
            case "paper":
                inputLoop = true;;
                break;
            case "scissors":
                inputLoop = true;;
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
    console.log("Computer chose: " + computerChoice  + "Player chose: " + playerChoice);
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
    }
   
    return;
}

function decideWinner() {
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
        return;
    }
}
function gameLoop() {
    gameCount = 0;
    win = 0;
    loss = 0;
    draw = 0;
    for (let i = 0; i < 5; i++) {
        console.log("before computer choice");
        getComputerChoice();
        console.log(computerChoice);
        console.log("before player choice");

        getPlayerChoice();
        console.log("before play round");
        playRound(computerChoice, playerChoice);

    }
    decidewinner();
}