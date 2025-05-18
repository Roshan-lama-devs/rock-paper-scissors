// Global score variables
let humanScore = 0;
let computerScore = 0;

// Function that returns Rock, Paper, or Scissors randomly
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round and update the score
function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toUpperCase();
  const computer = computerChoice.toUpperCase();

  if (human === computer) {
    console.log("It's a tie!");
  } else if (
    (human === "ROCK" && computer === "SCISSORS") ||
    (human === "PAPER" && computer === "ROCK") ||
    (human === "SCISSORS" && computer === "PAPER")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  updateScore();
}

// Function to handle button click
function handleClick(choice) {
  const computerChoice = getComputerChoice();
  playRound(choice, computerChoice);
}

// Function to update the score in the DOM
function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
}
