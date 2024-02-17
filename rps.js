let playersWins = 0;
let computersWins = 0;

playGame()

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    switch (randomChoice) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playersWins++;
        return "You Win!";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playersWins++;
        return "You Win!";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playersWins++;
        return "You Win!";
    }
    else {
        computersWins++;
        return "You Lose...";
    }
}

function validateInput() {
    let input = prompt("Rock Paper Scissors! What do you choose?");
    let validInput = false;
    while (!validInput) {
        if (input === "Rock" || input === "Paper" || input === "Scissors") {
            validInput = true;
            return input
        }
        else {
            input = prompt("Rock Paper Scissors! What do you choose?");
        }
    }
}

function playGame() {
    let round = 1;
    while (round <= 5) {
        userChoice = validateInput();
        console.log(playRound(userChoice, getComputerChoice()));
        console.log(`
            Round ${round}:
            Player: ${playersWins}
            Computer: ${computersWins}
                `)
        round++;
        if (playersWins > computersWins){
            console.log("Congratulations, you win!")
        }
        else if (playersWins < computersWins){
            console.log("You lost, better luck next time!")
        }
    }
}