function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random()*3);
    let computerSelection;
    
    if (randomNumber == 1) {
        computerSelection = "rock";
    } else if (randomNumber == 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }

    return computerSelection;
};

function cleanButtons() {
    let buttonContainer = document.querySelector('#button_container');
    buttonContainer.removeChild(rock);
    buttonContainer.removeChild(paper);
    buttonContainer.removeChild(scissors);
}

function playRound(selection) {
    let winner
    let playerSelection = selection;
    let computerSelection = getComputerChoice();
    let isValid = false;

    do {
        if (evaluateInput(playerSelection)==false) {
            playerSelection = prompt("Please choose either rock, paper or scissors. No other values work");
        } else {
            isValid = true
        }
    } while (isValid == false);

    
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            winner = "player";
        } else if (computerSelection == "paper") {
            winner = "computer";
        } else {
            winner = "tie";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            winner = "player";
        } else if (computerSelection == "scissors") {
            winner = "computer";
        } else {
            winner = "tie";
        }
    } else {
        if (computerSelection == "paper") {
            winner = "player";
        } else if (computerSelection == "rock") {
            winner = "computer";
        } else {
            winner = "tie"
        }
    }

    if (winner == "computer") {
        message = `You Lose! ${computerSelection} beats ${playerSelection}`;
        result_text.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computer_score = computer_score+1;
        computer_score_display.textContent = computer_score;
    } else if (winner == "player") {
        message = `You Win! ${playerSelection} beats ${computerSelection}`;
        result_text.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        player_score = player_score+1;
        player_score_display.textContent = player_score;
    } else {
        message = "Its a Tie! No one wins!";
        result_text.textContent = "Its a Tie! No one wins!";
    }
    console.log(message);

    // Check if game won
    if (computer_score == 5) {
        result_text.textContent = "Computer was the first to reach 5 points. Computer wins game!";
        cleanButtons();
    } else if (player_score == 5) {
        result_text.textContent = "Player was the first to reach 5 points. Player wins game!";
        cleanButtons();
    }

    return winner;
}

function evaluateInput(input) {
    let validValues = ["rock", "paper", "scissors"];
    let isValid = false;
    if (validValues.includes(input)) {
        isValid = true;
    }

    return isValid;
}

/* function playGame() {
    let message, winner;
    let playerScore = 0;
    let computerScore = 0;

    do {
        do {
            winner = playRound();
        } while (winner == "tie");
    
        if (winner == "computer") {
            computerScore = computerScore + 1;
        } else if (winner == "player") {
            playerScore = playerScore + 1;
        } else {"Something wierd has happened..."}
    } while (playerScore<3 && computerScore <3);

    if (playerScore > computerScore) {
        message = `Congratulations! You win ${playerScore}-${computerScore}`;
    } else if (playerScore < computerScore) {
        message = `Too bad! You lose ${playerScore}-${computerScore}`;
    } else {
        message = `It's a tie! ${playerScore}-${computerScore}`;
    }
    console.log("Game finished:");
    console.log(message); 

}*/

// define buttings
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

// Add event listeners
rock.addEventListener('click', () => playRound("rock"));
paper.addEventListener('click', () => playRound("paper"));
scissors.addEventListener('click', () => playRound("scissors"));

// tag display windows
let result_text = document.querySelector('#result_text');
let player_score_display = document.querySelector('#player_score');
let computer_score_display = document.querySelector('#computer_score');

// Initialize score
player_score = 0;
computer_score = 0;
player_score_display.textContent = player_score;
computer_score_display.textContent = computer_score;

// Code runs here
// playGame();
