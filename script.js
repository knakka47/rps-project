//Define the options array
const options = ["Rock", "Paper", "Scissors"];

//Create player choice function that validates input
function getPlayerChoice() {
    let input = prompt("Rock Paper Scissors! What do you choose?");

    while (!options.includes(input)){
        alert("Invalid selection, please try again.");
        input = prompt("Rock Paper Scissors! What do you choose?");
    }

    return input;
}

//Initialize playerSelection variable and log to console
let playerSelection = getPlayerChoice();
console.log("You picked " + playerSelection);

//Create random computer choice function
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

////Initialize computerSelection variable and log to console
let computerSelection = getComputerChoice();
console.log("Computer picked " + computerSelection);

//Create playRound function
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win!";
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose!";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win!" ;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose!";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win!";
    }
}

//Call playRound function and log to console
console.log(playRound(playerSelection, computerSelection));