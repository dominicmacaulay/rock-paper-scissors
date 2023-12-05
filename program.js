let computerChoice;
let playerInput;
let computerScore = 0;
let playerScore = 0;
game();

function game(){
    while(computerScore < 5 && playerScore < 5){ 
        playerInput = prompt("Your move...");
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        playRound(playerInput, computerChoice);
        console.log(playerScore, computerScore);
    }
    if (computerScore == 5){
        console.log("you lose")
        return "Loss";
    } else if (playerScore == 5){
        console.log("you win");
        return "Win";
    }
}

function getComputerChoice(){
    // select random number between 1 and 3
    let computerNum = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(computerNum);
    // assign computer choice based on the random number
    switch (computerNum){
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
        default: console.log("Something got fucked");
    }
}

function playRound(playerInput, computerChoice){
    let playerChoice = playerInput.toLowerCase();
    if (computerChoice == "rock"){
        if (playerChoice == "rock"){
            return "tie";
        }else if (playerChoice == "paper"){
            playerScore ++;
            return "win";
        }
        else if (playerChoice == "scissors"){
            computerScore ++;
            return "lose";
        }
    }else if(computerChoice == "paper"){
        if (playerChoice == "rock"){
            computerScore ++;
            return "lose";
        }else if (playerChoice == "paper"){
            return "tie";
        }
        else if (playerChoice == "scissors"){
            playerScore ++;
            return "win";
        }
    } else if (computerChoice == "scissors"){
        if (playerChoice == "rock"){
            playerScore ++;
            return "win";
        }else if (playerChoice == "paper"){
            computerScore ++;
            return "lose";
        }
        else if (playerChoice == "scissors"){
            return "tie";
        }
    } else {console.log("something got fucked 2");}
}