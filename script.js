'use strict';
/*

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);


// if you want to eradicate the decimal add 'math trunc'
// if i want the no to be between 1 & 20, multiply it by 20 and add 1 to it.
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there's no number/value
  if (!guess) {
    document.querySelector('.message').textContent = '⚠ No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈  Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!😢';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈  Too low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!😢';
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('.message').textContent = '📉 Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// we need to implement when the guess is correct, high and low.

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10; 

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// if i want a no btwn 1 and 20, i will start by multiplying const no = Math.random() * 20
// to remove the decimal, use 'math.trunc'. you will be left with no btwn 0 and 19
// to elevate it, add 1 at the end of th 20.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No  number!⚠'
    displayMessage('No  number!⚠');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number🎉';
    displayMessage('Correct Number🎉');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Refactoring means changing the code without changing how it works. we do refactoring to improve the code and eliminate duplicate code.
    // when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //  document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too high 📉' : 'Too low📈';
      displayMessage(guess > secretNumber ? 'Too high📉' : 'Too low📈');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lose😢';
      displayMessage('You lose😢');
      document.querySelector('.score').textContent = 0;
    }
  }

  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high 📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose😢';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low 📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose😢';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // we need to implement what happens when the guess is correct, too low and too high
});
/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)4
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
