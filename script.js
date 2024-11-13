 // Initialising the variables
let getComputerChoice, getHumanChoice = 0;
let humanScore = 0;
let computerScore = 0;

// User input for how many rounds to play
let roundNumber = parseInt(prompt("Enter the number of rounds you want to play."));

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

while(roundNumber > 0) {

    getComputerChoice = choiceMaker(3);
    let computerInputLength = getComputerChoice.length;

    // Input the User's choice
    getHumanChoice = prompt("Enter your choice Rock, Paper, Scissors");
    let getHumanChoiceLength = getHumanChoice.length;

    // Comparing the User's choice vs The computer's choice and printing Output
    console.log(roundNumber);
    if(computerInputLength == getHumanChoiceLength) {
        console.log("Tie");
    } 
    else if(computerInputLength == 4 && getHumanChoiceLength == 5 || computerInputLength == 5 && getHumanChoiceLength == 8 || computerInputLength == 8 && getHumanChoiceLength == 4) {
        humanScore = humanScore + 1;
        console.log(`Player Wins, Score = ${humanScore}`);

    }
    else {
        computerScore = computerScore + 1;
        console.log(`Computer Wins, Score = ${computerScore}`);

    }
    roundNumber -= 1;
}

if(humanScore == computerScore) {
    console.log("Result of Match : TIE!!!");   
}
else if(humanScore > computerScore) {
    console.log("Result of Match : PLAYER WINS!!!");
}
else {
    console.log("Result of Match : COMPUTER WINS!!!");
}
