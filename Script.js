// sets the computer's and player's wins

// Starting from 0 would result in multiplying by 0 during every score update, which would result, in our not functioning as expected
let playerWins = 1;
let computerWins = 1;
let playerplaceholder, computerplaceholder;

// starts a new round of the game
function playRound(playerSelection, computerChoice) {
  let playerscore = document.querySelector(".playerscore");
  const computerscore = document.querySelector(".computerscore");
  const roundresults = document.querySelector(".roundresults");

  // determines what move beats the other, and what message to display on roundresults
  if (playerSelection === computerChoice) {
    roundresults.textContent = "It's a tie!";
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerChoice === "scissors") ||
    (playerSelection === "paper" && computerChoice === "rock") ||
    (playerSelection === "scissors" && computerChoice === "paper")
  ) {
    playerscore.textContent = "Player: " + playerWins++;
    roundresults.textContent = "You Won!";
    return "Player wins!";
  } else {
    computerscore.textContent = "Computer: " + computerWins++;
    roundresults.textContent = "You Lost!";
    return "Computer wins!";
  }
}

// adds the functionality for the rock button to work
function rockClick() {
  let playerSelection = "rock";

  playerplaceholder.textContent = "🪨";
  playerplaceholder.style.fontSize = "67px";

  // generates a random number, which is used as the computer's choice
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  // gets the computer's choice based on the number
  const computerChoice = getComputerChoice(randomNumber);
  // gets the right emoji to display the computer's move
  const computerChoiceEmoji = getEmojiForChoice(computerChoice);

  computerplaceholder.textContent = computerChoiceEmoji;
  computerplaceholder.style.fontSize = "67px";

  playRound(playerSelection, computerChoice);

  // checks if the game has ended
  endGame();
}

// adds the functionality for the paper button to work
function paperClick() {
  let playerSelection = "paper";

  playerplaceholder.textContent = "📜";
  playerplaceholder.style.fontSize = "67px";

  // generates a random number, which is used as the computer's choice
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  // gets the computer's choice based on the number
  const computerChoice = getComputerChoice(randomNumber);
  // gets the right emoji to display the computer's move
  const computerChoiceEmoji = getEmojiForChoice(computerChoice);

  computerplaceholder.textContent = computerChoiceEmoji;
  computerplaceholder.style.fontSize = "67px";

  playRound(playerSelection, computerChoice);

  // checks if the game has ended
  endGame();
}

// adds the functionality for the scissor button to work
function scissorClick() {
  let playerSelection = "scissors";

  playerplaceholder.textContent = "✂️";
  playerplaceholder.style.fontSize = "67px";

  // generates a random number, which is used as the computer's choice
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  // gets the computer's choice based on the number
  const computerChoice = getComputerChoice(randomNumber);
  // gets the right emoji to display the computer's move
  const computerChoiceEmoji = getEmojiForChoice(computerChoice);

  computerplaceholder.textContent = computerChoiceEmoji;
  computerplaceholder.style.fontSize = "67px";

  playRound(playerSelection, computerChoice);

  // checks if the game has ended
  endGame();
}

// loads the dom when the page is loaded, so event listeners work
document.addEventListener("DOMContentLoaded", () => {
  playerplaceholder = document.querySelector(".playerplaceholder");
  computerplaceholder = document.querySelector(".computerplaceholder");

  const rock = document.querySelector(".rock");
  rock.addEventListener("click", rockClick);

  const paper = document.querySelector(".paper");
  paper.addEventListener("click", paperClick);

  const scissors = document.querySelector(".scissors");
  scissors.addEventListener("click", scissorClick);
});

// gives the computer choices, and allows it to randomly pick one each times
function getComputerChoice(move) {
  const choices = ["rock", "paper", "scissors"];
  const selectedChoice = choices[move - 1];
  return selectedChoice;
}

// sets the emojis for each choice, which is used to update the computer placeholder
function getEmojiForChoice(choice) {
  switch (choice) {
    case "rock":
      return "🪨";
    case "paper":
      return "📜";
    case "scissors":
      return "✂️";
    default:
      return "";
  }
}

// this ends round, once someone has reached 5 wins
function endGame() {
  const roundresults = document.querySelector(".roundresults");
  // removes event listeners if someone has won
  if (computerWins === 6) {
    const rock = document.querySelector(".rock");
    rock.removeEventListener("click", rockClick);
    const paper = document.querySelector(".paper");
    paper.removeEventListener("click", paperClick);
    const scissors = document.querySelector(".scissors");
    scissors.removeEventListener("click", scissorClick);
    return (roundresults.textContent = "Game Over! Player Lost");
  }
  // removes event listeners if someone has won
  if (playerWins === 6) {
    const rock = document.querySelector(".rock");
    rock.removeEventListener("click", rockClick);
    const paper = document.querySelector(".paper");
    paper.removeEventListener("click", paperClick);
    const scissors = document.querySelector(".scissors");
    scissors.removeEventListener("click", scissorClick);
    return (roundresults.textContent = "Game Over! Player Won!");
  }
  newRound(); // allows the game to start a new round, once someone has won
}

// resets dom elements, to the original state, adds event listeners back
function newRound() {
  // adds the event listener for the play again button
  const playagain = document.querySelector(".playagain");
  playagain.addEventListener("click", newRoundClick);

  function newRoundClick() {
    let playerscore = document.querySelector(".playerscore");
    const roundresults = document.querySelector(".roundresults");
    const computerscore = document.querySelector(".computerscore");

    //resets the computer and player's win variables to the original state, to allow the game to determine wins, and update the scores
    playerWins = 1;
    computerWins = 1;

    roundresults.textContent = "Select a move";
    playerscore.textContent = "Player: 0";
    computerscore.textContent = "Computer: 0";

    const computerplaceholder = document.querySelector(".computerplaceholder");
    const playerplaceholder = document.querySelector(".playerplaceholder");

    playerplaceholder.textContent = "❔";
    playerplaceholder.style.fontSize = "80px";

    computerplaceholder.textContent = "❔";
    computerplaceholder.style.fontSize = "80px";

    const rock = document.querySelector(".rock");
    rock.addEventListener("click", rockClick);

    const paper = document.querySelector(".paper");
    paper.addEventListener("click", paperClick);

    const scissors = document.querySelector(".scissors");
    scissors.addEventListener("click", scissorClick);
  }
}
