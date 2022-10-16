function getComputerChoice() {
    let hands = ["rock", "paper", "scissor"];
    let playHands = hands[Math.floor(Math.random()*hands.length)];
    return playHands;
}

let computerScore = 0;
let playerScore = 0;


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        console.log(`It is a draw!`);
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection == "rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("It is a draw!");
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log(`You win! ${playerSelection} beats  ${computerSelection}`);
        playerScore++
    } else {
        console.log(`It is a draw`)
    }
    
    
}

let playerSelection = prompt("rock, paper, scissor?")
//let playerSelection = "rock";
//var computerSelection = getComputerChoice();


//playRound(playerSelection, computerSelection);

function game() {
    for (let i = 0; i < 5; i++) {
    playRound(playerSelection, getComputerChoice());
        
}
if (playerScore > computerScore) {
    console.log(`Player: ${playerScore}, Computer: ${computerScore}. You win!`)
} else if (computerScore > playerScore) {
    console.log(`Player: ${playerScore}, Computer: ${computerScore}. You lose!`)
} else {
    console.log(`Player: ${playerScore}, Computer: ${computerScore}. It was a draw!`)
}
}


game();

