'use strict';
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = document.getElementById('score').innerText;
let highScore = document.getElementById('high-score').innerText;
function check() {
  
    // checking
    let inputNumber = Number(document.getElementById('guess').value);
    let displayNumber = document.getElementById('display-number');
    displayNumber.innerText = inputNumber;
  if (randomNumber == inputNumber) {
    document.querySelector('body').style.backgroundColor = 'green';
    document.getElementById('message').innerText = ' You Win ';

  } else if (randomNumber > inputNumber) {
    document.getElementById('message').innerText = ' Too low.. ';
    score -= 1;
  } else if (randomNumber < inputNumber) {
    document.getElementById('message').innerText = ' Too high ..';
    score -= 1;
  } else {

  }
  
  document.getElementById('score').innerText = score;
  document.getElementById('high-score').innerText = score;

}



