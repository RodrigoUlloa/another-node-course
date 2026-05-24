const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORSS";
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER} o ${SCISSORS}`, "").toUpperCase();
  if (selection !== ROCK && selection != PAPER && selection != SCISSORS) {
    alert(`Invalid choice! We chose  Rock for You`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is stariting...");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
