// global variable for keeping track of the scores
let humanScore = 0;
let computerScore = 0;

// Function that return Rock, paper or scissors randomly
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  //   console.log(randomNumber);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
const computerSelection = getComputerChoice();
console.log(computerSelection);

// function to get input from the user

function getHumanChoice() {
  const humanInput = prompt("Please enter your choice");
  return humanInput;
}
const humanSelection = getHumanChoice();

// Function to compare human and computer choice
function playRound(humanChoice, computerChoice) {
  const upperCasedHumanChoice = humanChoice.toUpperCase();
  if (upperCasedHumanChoice === "ROCK" && computerChoice === "Paper") {
    console.log("You lose! Paper beats Rock");
  } else if (
    upperCasedHumanChoice === "PAPER" &&
    computerChoice === "Scissors"
  ) {
    console.log("You lose! Scissors beats Paper");
  } else if (
    upperCasedHumanChoice === "SCISSORS" &&
    computerChoice === "Rock"
  ) {
    console.log("You lose! Rock beats Scissors");
  } else if (
    upperCasedHumanChoice === "SCISSORS" &&
    computerChoice === "Paper"
  ) {
    console.log("You win! Scissors beats Paper");
  } else if (
    upperCasedHumanChoice === "ROCK" &&
    computerChoice === "Scissors"
  ) {
    console.log("You win! Rock beats Scissors");
  } else if (upperCasedHumanChoice === "PAPER" && computerChoice === "Rock") {
    console.log("You win! Paper beats Rock");
  } else {
    console.log("It is a tie game.");
  }
}

playRound(humanSelection, computerSelection);
