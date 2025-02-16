'use strict';

// Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Retrieve the initial score from the HTML element
let score = document.querySelector('.score').textContent;
let highscore = 0; // Initialize the high score

// Function to update the message displayed to the player
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event listener for when the "Check!" button is clicked
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // Get user input
  console.log(guess, typeof guess); // Debugging log to console

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber; // Reveal the correct number
    document.querySelector('body').style.backgroundColor = '#60b347'; // Change background color to green
    document.querySelector('.number').style.width = '30rem'; // Increase number box width

    // Update highscore if the current score is greater
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When the guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--; // Decrease score
      document.querySelector('.score').textContent = score; // Update score in UI
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0; // Set score to 0
    }
  }

  // Event listener for when the "Again!" button is clicked (Reset game)
  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate new secret number
    document.querySelector('.number').textContent = '?'; // Reset number display
    score = 20; // Reset score
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...'); // Reset message
    document.querySelector('body').style.backgroundColor = '#222'; // Reset background color
    document.querySelector('.number').style.width = '15rem'; // Reset number box width
    document.querySelector('.guess').value = ''; // Clear input field
  });
});
