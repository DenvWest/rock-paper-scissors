console.log("hello world");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const r = Math.random();
  if (r < 1 / 3) return "rock";
  if (r < 2 / 3) return "paper";
  return "scissors";
}

function getHumanChoice() {
  const input = prompt("Rock, paper or scissors?");
  return input.toLowerC
  ase();
}

function playRound(humanChoice, computerChoice) {
  
  
  console.log("Human:", humanChoice);
  console.log("Computer:", computerChoice);
}


console.log("After test:", humanScore, computerScore);
console.log("Scores bij start:", humanScore, computerScore);

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

console.log(getHumanChoice());
playRound("paper", "rock");


