const container = document.querySelector('#container');
container.classList.add('container');
const buttons = document.querySelectorAll('button');

const button_container = document.createElement('div');
button_container.classList.add('btn-container');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

button_container.appendChild(rock);
button_container.appendChild(paper);
button_container.appendChild(scissors);

container.appendChild(button_container);

const score = document.createElement('div');
score.classList.add('score');
score.innerText = "Pick your selection!";
container.insertBefore(score, button_container);

function getComputerChoice() {
    let choicesArray = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * choicesArray.length);
    let computerChoice = choicesArray[randomIndex];
    return computerChoice;
}

function getPlayerChoice(event) {
    let playerChoice = event.target.innerText;
    return playerChoice;
}

function playGame() {
    let round = 1;
    let playerScore = 0;
    let computerScore = 0;
    buttons.forEach((button) => {
        button.addEventListener('click', function (event) {
            if (round < 5){
                let playerChoice = getPlayerChoice(event);
                let computerChoice = getComputerChoice(event);
                let result = playRound(playerChoice, computerChoice);

                if (result === 'You Win!'){
                    playerScore++;
                }
                else if (result === 'You Lose...'){
                    computerScore++;
                }
                else{

                }
                score.innerHTML = "Round "+round+"<br> "+"Player : "+playerChoice+"<br>Computer : "+computerChoice+
                                  "<br>Score : "+playerScore+" - "+computerScore;
                round++;
                console.log(playerScore+"<br>"+computerScore)
            }
            else if(round>=5){
                score.setAttribute('style','text-align:center;')
                if(playerScore>computerScore){
                    score.innerHTML = "5 Rounds Played"+"<br>Score : "+playerScore+" - "+computerScore+
                                "<br>"+"You Won!"
                                console.log(playerScore+"<br>"+computerScore)
                } else if(playerScore<computerScore){
                    score.innerHTML = "5 Rounds Played"+"<br>Score : "+playerScore+" - "+computerScore+
                                "<br>"+"You Lost..."
                } else {
                    score.innerHTML = "5 Rounds Played"+"<br>Score : "+playerScore+" - "+computerScore+
                                "<br>"+"Tie Game!"
                }
                buttons.forEach(button => {
                    button.removeEventListener('click', this);
                });

            }

        })
    })
   
}
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie!";
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        return "You Win!";
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        return "You Win!";
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        return "You Win!";
    }
    else {
        return "You Lose...";
    }
}
playGame();