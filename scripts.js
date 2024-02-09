function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random()*3);
    let computerSelection;
    
    if (randomNumber == 1) {
        computerSelection = "rock";
    } else if (randomNumber == 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissor";
    }

    return computerSelection;
};

function playRound() {
    let winner
    let playerSelection = prompt("Choose: rock, paper or scissor").toLowerCase();
    let computerSelection = getComputerChoice();
    let isValid = false;

    do {
        if (evaluateInput(playerSelection)==false) {
            playerSelection = prompt("Please choose either rock, paper or scissor. No other values work");
        } else {
            isValid = true
        }
    } while (isValid == false);

    
    if (playerSelection == "rock") {
        if (computerSelection == "scissor") {
            winner = "player";
        } else if (computerSelection == "paper") {
            winner = "computer";
        } else {
            winner = "tie";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            winner = "player";
        } else if (computerSelection == "scissor") {
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
    } else if (winner == "player") {
        message = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        message = "Its a Tie! No one wins!";
    }
    console.log(message);

    return winner;
}

function evaluateInput(input) {
    let validValues = ["rock", "paper", "scissor"];
    let isValid = false;
    if (validValues.includes(input)) {
        isValid = true;
    }

    return isValid;
}

function playGame() {
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

}

// Code runs here
playGame();
