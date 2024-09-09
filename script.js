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
}

function playRound(humanChoice, computerChoice) {
    let winner = "";

    if (humanChoice === computerChoice) {
        winner = `Round ${i} : no winner.`;
    } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        winner = `Round ${i} : you won!`;
        humanScore++;
    } else {
        winner = `Round ${i} : computer won...`;
        computerScore++;
    }

    const results = document.querySelector(".results");
    const lines = [`>>>ROUND ${i}`, `Your choice : ${humanChoice}`, `Computer's choice : ${computerChoice}`, winner];

    lines.forEach(line => {
        const paragraph = document.createElement("p");
        paragraph.textContent = line;
        results.appendChild(paragraph);
    })
}

function playGame(event, numberOfRounds) {
    playRound(event.target.id, getComputerChoice());
    i++;

    if (i === numberOfRounds+1) {
        let winner = "";
    
        if (humanScore > computerScore) {
            winner = "YOU WON !";
        } else if (computerScore > humanScore) {
            winner = "COMPUTER WON...";
        } else {
            winner = "NO ONE WON.";
        }
    
        const results = document.querySelector(".results");
        const lines = [`>>>>GAME FINAL OUTCOME`, `Your score : ${humanScore}`, `Computer's score : ${computerScore}`, winner];
    
        lines.forEach(line => {
            const paragraph = document.createElement("p");
            paragraph.textContent = line;
            results.appendChild(paragraph);
        })
    }
}

let buttons = document.querySelector(".choices");

buttons.addEventListener("click", (event) => {
    let numberOfRounds = 5;

    if (i === numberOfRounds+1) {
        humanScore = 0;
        computerScore = 0;
        i = 0;
    }

    playGame(event, numberOfRounds);

})