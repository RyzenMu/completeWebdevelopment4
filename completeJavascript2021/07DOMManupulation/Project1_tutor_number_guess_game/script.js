'use strict';

/*let message = document.querySelector('.message').textContent;
document.querySelector('.message').textContent = "Corect Number";

let number = document.querySelector('.number').textContent;
let score = document.querySelector('.score').textContent;
let guess = document.querySelector('.guess').value;
console.log(guess);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let message = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
  // when player wins
  else if (guess === secretNumber) {
    message('corret number');
    // document.querySelector('.message').textContent = 'correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score.highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? ' Too High! ' : 'Too low...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game ';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing ...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
