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
  return input.toLowerCase();
}
function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice;

  if (human === computer) {
  console.log(`Tie! You both chose ${human}.`);
  return;
  }

  const humanWins =
  (human === "rock" && computer === "scissors") ||
  (human === "paper" && computer === "rock") ||
  (human === "scissors" && computer === "paper");
console.log("humanWins:", humanWins);

if (humanWins) {
  humanScore++;
  console.log(`You win! ${human} beats ${computer}.`);
} else {
  computerScore++;
  console.log(`You lose! ${computer} beats ${human}.`);
}

console.log(`Score -> Human: ${humanScore} | Computer: ${computerScore}`);
}

playRound("rock", "rock");
playRound("ROCK", "scissors");




console.log("After test:", humanScore, computerScore);
console.log("Scores bij start:", humanScore, computerScore);
console.log(getComputerChoice());
console.log(getComputerChoice());
;

humanScore = 0;
computerScore = 0;

playRound("rock", "scissors");
playRound("rock", "paper");
playRound("rock", "rock");

console.log("Final score:", humanScore, computerScore);


