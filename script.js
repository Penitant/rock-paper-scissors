 // Initialising the variables
let computerGeneratedInput, userInput, computernNormalisation, userNormalisation  = 0;
let counter = 0;
let playerScore = 0;
let computerScore = 0;

// Round - 1
// Generating a random between 1 and 3;
function choiceMaker(max) {
    let x = Math.floor(Math.random() * max);
    if (x == 0) {
        return "Rock";
    }
    else if (x == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

computerGeneratedInput = choiceMaker(3);
let computerInputLength = computerGeneratedInput.length;

// Input the User's choice
userInput = prompt("Enter your choice Rock, Paper, Scissors");
let userInputLength = userInput.length;

// Comparing the User's choice vs The computer's choice 
if(computerInputLength == userInputLength) {
    console.log("Tie");
} 
else if(computerInputLength == 4 && userInputLength == 5 || computerInputLength == 5 && userInputLength == 8 || computerInputLength == 8 && userInputLength == 4) {
    playerScore = playerScore + 1;
    console.log(`Player Wins, Score = ${playerScore}`);
    
}
else {
    computerScore = computerScore + 1;
    console.log(`Computer Wins, Score = ${computerScore}`);
    
}