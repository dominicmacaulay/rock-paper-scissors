console.log("Hello World!");

let computerNum;
let computerChoice;
let playerChoice;

getComputerChoice();
playOneRound(playerChoice, computerChoice);

function getComputerChoice(){
    // select random number between 1 and 3
    computerNum = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(computerNum);
    // assign computer choice based on the random number
    switch (computerNum){
        case 1: computerChoice = "Rock";
            break;
        case 2: computerChoice = "Paper";
            break;
        case 3: computerChoice = "Scissors";
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
    }
    // if choice is not valid, say so
    else{
        console.log("bad input");
    }

}

function playOneRound(playerChoice, computerChoice){
    // 
}