console.log("Hello World!");

let computerNum;
let computerChoice;
let playerChoice;

let computerScore = 0;
let playerScore = 0;

getComputerChoice();

function getComputerChoice(){
    // select random number between 1 and 3
    computerNum = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(computerNum);
    // assign computer choice based on the random number
    switch (computerNum){
        case 1: computerChoice = "rock";
            break;
        case 2: computerChoice = "paper";
            break;
        case 3: computerChoice = "scissors";
            break;
        default: console.log("Something got fucked");
    }
    console.log(computerChoice);
    return computerChoice;
}

function validatePlayerChoice(playerChoice){
    // check whether player choice is valid
    if (playerChoice.toLowerCase() == "rock" || "paper" || "scissors"){
        // if choice is valid, make player input lower case
        return playerChoice = playerChoice.toLowerCase();
        playOneRound(computerChoice);
    }
    // if choice is not valid, say so
    else{
        console.log("bad input");
    }

}

function playOneRound(computerChoice){
    // call function relative to the computer's choice
    if (computerChoice == "rock"){
        ifRock(playerChoice);
    }else if (computerChoice == "paper"){
        ifPaper(playerChoice);
    }else if (computerChoice == "scissors"){
        // ifScissors(playerChoice);
    }
    return;
}

function ifRock(playerChoice){
    if (playerChoice == "rock"){
        return "It's a tie!";
        // play again
    }else if (playerChoice == "paper"){
        playerScore ++;
        return "You win!";
        // play again
    }else if (playerChoice == "scissors"){
        computerScore ++;
        return "You lose!";
        // play again
    }
}

function ifPaper(playerChoice){
    if (playerChoice == "rock"){
        computerScore ++;
        return "You lose!";
        // play again
    }else if (playerChoice == "paper"){
        return "It's a tie!";
        // play again
    }else if (playerChoice == "scissors"){
        playerScore ++;
        return "You win!";
        // play again
    }
}

function ifScissors(playerChoice){
    if (playerChoice == "rock"){
        playerScore ++;
        return "You lose!";
        // play again
    }else if (playerChoice == "paper"){
        playerScore ++;
        return "You win!";
        // play again
    }else if (playerChoice == "scissors"){
        return "It's a tie!";
        // play again
    }
}