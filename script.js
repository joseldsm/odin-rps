console.log("Hello World");

function getComputerChoice() {
    let a = Math.random();
    console.log(a);

    if (a < 0.33) {
        return "Rock";
    } else if (a < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    let userInput;

    do {
        userInput = prompt("Choose between Rock, Paper or Scissors:")
    } while (userInput !== "Rock" && userInput !== "Paper" && userInput !== "Scissors")
}

getHumanChoice();