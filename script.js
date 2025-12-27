console.log("hello world");

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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

    if (humanWins) {
      humanScore++;
      console.log(`You win! ${human} beats ${computer}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computer} beats ${human}.`);
    }

    console.log(`Score -> Human: ${humanScore} | Computer: ${computerScore}`);
  }

  for (let round = 1; round <= 5; round++) {
    console.log(`--- Round ${round} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("--- Final Result ---");
  console.log(`Final Score -> Human: ${humanScore} | Computer: ${computerScore}`);

  if (humanScore > computerScore) console.log("You won the game!");
  else if (computerScore > humanScore) console.log("You lost the game!");
  else console.log("The game is a tie!");
}
playGame();

