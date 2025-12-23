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

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

console.log(getHumanChoice());
