const btnR = document.querySelector('#rock');
const btnP = document.querySelector('#paper');
const btnS = document.querySelector('#scissors');

const textResults = document.querySelector('#results');
const textWinner = document.querySelector('#winner');
const textScore = document.querySelector('#score');

let computerChoice;
let computerScore = 0;
let playerScore = 0;

// whenever these buttons are clicked, they call the play round function
// with whatever choice the player made as the value.
btnR.addEventListener('click', () => {
    playRound('rock');
});
btnP.addEventListener('click', () => {
    playRound('paper');
});
btnS.addEventListener('click', () => {
    playRound('scissors');
});

// display the starting score
textScore.textContent = "Your Score: " + playerScore + " -- Opponent Score: " + computerScore;

// function called to get the computer's choice and compare it with the 
// player's choice.
function playRound(playerChoice){
    computerChoice = getComputerChoice();

    // compare player guesses
    if (computerChoice == "rock"){
        if (playerChoice == "rock"){
            textResults.textContent = "It's a tie";
        }else if (playerChoice == "paper"){
            playerScore ++;
            textResults.textContent = "You won!";
        }
        else if (playerChoice == "scissors"){
            computerScore ++;
            textResults.textContent = "You Lost!";
        }
    }else if(computerChoice == "paper"){
        if (playerChoice == "rock"){
            computerScore ++;
            textResults.textContent = "You Lost!";
        }else if (playerChoice == "paper"){
            textResults.textContent = "It's a tie";
        }
        else if (playerChoice == "scissors"){
            playerScore ++;
            textResults.textContent = "You won!";
        }
    } else if (computerChoice == "scissors"){
        if (playerChoice == "rock"){
            playerScore ++;
            textResults.textContent = "You won!";
        }else if (playerChoice == "paper"){
            computerScore ++;
            textResults.textContent = "You Lost!";
        }
        else if (playerChoice == "scissors"){
            textResults.textContent = "It's a tie";
        }
    } else {console.log("something is wrong 2");}

    // display score
    textScore.textContent = "Your Score: " + playerScore + " -- Opponent Score: " + computerScore;

    // check for win condiditon from either player
    if (computerScore == 5){
        console.log("you lose")
        textWinner.textContent = "Your Opponent Won The Game...";
    } else if (playerScore == 5){
        console.log("you win");
        textWinner.textContent = "You Have Won The Game!";
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
        default: console.log("Something is wrong 1");
    }
}