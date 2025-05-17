// Function that return Rock, paper or scissors randomly
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
console.log(getComputerChoice());
// function to get input from the user

function getHumanChoice() {
  let humanChoice = prompt("Please enter your choice");
  console.log(humanChoice);
}

getHumanChoice();
