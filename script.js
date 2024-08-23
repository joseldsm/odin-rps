let humanScore = 0;
let computerScore = 0;
let i = 0;

function getComputerChoice() {
    let a = Math.random();

    if (a < 0.33) {
        return "rock";
    } else if (a < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput;

    do {
        userInput = prompt("Choose between rock, paper or scissors:");
        userInput = userInput.toLowerCase();
    } while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors")
    
    return userInput;
}

function playRound(humanChoice, computerChoice) {

    console.log(`>>>ROUND ${i}`);
    console.log(`Your choice : ${humanChoice}`);
    console.log(`Computer's choice : ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log(`NO WINNER`);
    } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`YOU WON !`);
        humanScore++;
    } else {
        console.log(`COMPUTER WON...`);
        computerScore++;
    }
}

function playGame(numberOfRounds) {    
    for (i = 1; i <= numberOfRounds; i++) {
        playRound(getHumanChoice(), getComputerChoice(), i);
    }

    if (humanScore > computerScore) {
        console.log("You won !");
    } else if (computerScore > humanScore) {
        console.log("You lost !")
    } else {
        console.log("No one won...")
    }

    console.log(`>>>>GAME FINAL OUTCOME`);
    console.log(`Your score : ${humanScore}`);
    console.log(`Computer's score : ${computerScore}`);
}

playGame(5);