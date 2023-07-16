
let win = 0;
let loss = 0;
let draw = 0;
let randomChoice = 0;

gameLoop();

function getComputerChoice() {
    const cpuWeapon1 = document.getElementById('cWeapon');
    randomChoice = Math.floor(Math.random() * (3) + 1) ;
    cpuWeapon1.innerHTML = ("");
    switch (randomChoice){
        case 1:
            cpuWeapon1.innerHTML =( "rock");
            
            break;
        case 2:
            cpuWeapon1.innerHTML = ("paper");
            
            break;
        case 3:
            cpuWeapon1.innerHTML = ("scissors");
            
            break;
    }
}
function getPlayerChoice() {
    let inputLoop = true;    
    const pWeapon1 = document.getElementById('pWeapon');
    const rock1 = document.getElementById('rock');
    const paper1 = document.getElementById('paper');
    const scissors1 = document.getElementById('scissors');
    const buttons = document.querySelectorAll('button');
    const conChoice = document.getElementById('greeting');
    rock1.style.color = 'black';
    paper1.style.color = 'black';
    scissors1.style.color = 'black';
    //pWeapon1.innerHTML = prompt("Enter rock, paper, or scissors: ");
    
    //pWeapon1.innerHTML = pWeapon1.innerHTML.toLowerCase();
    
    conChoice.innerHTML = ('Choose Your Weapon');

    //AS of 7/16/2023 this function is stuck in an infinite loop
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            pWeapon1.innerHTML = button.innerHTML;
            return;
        })
    });
    while (inputLoop == true) {
        switch (pWeapon1.innerHTML) {
            case "rock":
                rock1.style.color = 'yellow';
                inputLoop = false;
                break;
            case "paper":
                paper1.style.color = 'yellow';
                inputLoop = false;
                break;
            case "scissors":
                scissors1.style.color = 'yellow';
                inputLoop = false;
                break;
            default:

                break;
        }
        
    }

        return;
    
}
function playRound(p, c) {
   // console.log("Computer chose: " + computerChoice  + " Player chose: " + pWeapon1.innerHTML);
    if (p === "rock" && c === "scissors") {
        
       // console.log("1 win");
        win = (win + 1);
    }
    else if (p === "rock" && c === "rock") {
        //console.log("1 draw");
        draw = (draw + 1);
        
    }
    else if (p=== "paper" && c === "rock") {
        //console.log("1 win");
        win = (win + 1);

    }
    else if (p=== "paper" && c === "paper") {
        draw = (draw + 1);
        //console.log("1 draw");
    }
    else if (p=== "scissors" && c === "paper") {
        //console.log("1 win");
        win = (win + 1);

    }
    else if (p=== "scissors" && c === "scissors") {
        draw = (draw + 1);
        //console.log("1 draw");
    }
    else {
       // console.log("1 loss");
        loss = loss + 1;
    }
   
    return;
}

function decideWinner() {
   // console.log("Wins;Losses;Draws: " + win + ";" + loss + ";" + draw);
    const winner = document.getElementById('winner');
    if (win > 2) {
    
          winner.innerHTML =  'You have won the game: ';
        gameLoop();
    }
    else if (draw > 2) {
        //console.log("The game was a tie: ");
        winner.innerHTML = 'The game was a tie: ';
        gameLoop();
    }
    else if(loss > 2){
        //console.log("You have lost the game: ");
        winner.innerHTML = 'You have lost the game: ';
        gameLoop();
    }
    else {
        //console.log("Default draw");
        winner.innerHTML = ('Default draw: ');
        return;
    }
}
function gameLoop() {
    gameCount = 0;
    win = 0;
    loss = 0;
    draw = 0;
    
    const conWin = document.getElementById('pScore');
    const conLoss = document.getElementById('cpuScore');
    const conDraw = document.getElementById('draw');
 
    
    
    
 
    
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        
        
        getPlayerChoice();
             
        playRound(pWeapon1.innerHTML, cpuWeapon1.innerHTML);

    }
    decideWinner();
}