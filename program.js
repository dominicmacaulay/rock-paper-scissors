console.log("Hello World!");

let computerNum;
let computerChoice;
let playerChoice;

getComputerChoice();
playOneRound(playerChoice, computerChoice);

function getComputerChoice(){
    computerNum = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(computerNum);
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

function playOneRound(playerChoice, computerChoice){}