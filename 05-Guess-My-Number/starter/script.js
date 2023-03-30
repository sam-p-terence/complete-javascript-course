'use strict';

/////////////////////////////// 70. PROJECT #1: Guess My Number


// console.log(document.querySelector('.message').textContent);


/////////////////////// 71. What's the DOM and DOM Manipulation

"DOM is the Document Object Model: Structured Representation of HTML Document. Allows JavaScript to access HTML Elements and Styles to Manipulate them."

"API: Application Programming Interface."

/////////////////////// 72. Selecting and Manipulating Elements

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

////////////////////////////////// 73. Handling Click Events

// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(document.querySelector('.guess').value)
//     console.log(guess, typeof guess);

//     if(!guess) {
//         document.querySelector('.message').textContent = '⛔ No Number detected!'
//     }

// });

//////////////////////////////// 74. Implementing the Game Logic


// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// document.querySelector('.number').textContent = secretNumber

// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(document.querySelector('.guess').value)
//     console.log(guess, typeof guess);

//     if(!guess) {
//         document.querySelector('.message').textContent = '❌ No Number detected!'
//     } else if (guess === secretNumber) {
//         document.querySelector('.message').textContent = '✅ Correct Number!'
//     } else if (guess > secretNumber) {
//         if(score > 1) {
//             document.querySelector('.message').textContent = '❌ Too High!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 0;
//             document.querySelector('.message').textContent = "😣 You lost the game!";
//         }
//     } else if (guess < secretNumber) {
//         if(score > 1) {
//             document.querySelector('.message').textContent = '❌ Too Low!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 0;
//             document.querySelector('.message').textContent = "😣 You lost the game!";
//         }
//     }
// });

////////////////////////////////////////// 75. Manipulating CSS Styles

// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// document.querySelector('.number').textContent = secretNumber

// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(document.querySelector('.guess').value)
//     console.log(guess, typeof guess);


//     // When no number is entered
//     if(!guess) {
//         document.querySelector('.message').textContent = '❌ No Number detected!'


//         // When player wins
//     } else if (guess === secretNumber) {
//         document.querySelector('.message').textContent = '✅ Correct Number!';
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';

//         // When the number is too high
//     } else if (guess > secretNumber) {
//         if(score > 1) {
//             document.querySelector('.message').textContent = '❌ Too High!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 0;
//             document.querySelector('.message').textContent = "😣 You lost the game!";
//         }

//         //When the number is too low
//     } else if (guess < secretNumber) {
//         if(score > 1) {
//             document.querySelector('.message').textContent = '❌ Too Low!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 0;
//             document.querySelector('.message').textContent = "😣 You lost the game!";
//         }
//     }
// });

///////////////////////////////// 76. Coding Challenge #1

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// document.querySelector('.number').textContent = secretNumber

// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(document.querySelector('.guess').value)
//     console.log(guess, typeof guess);


//     // When no number is entered
//     if(!guess) {
//         document.querySelector('.message').textContent = '❌ No Number detected!'


//         // When player wins
//     } else if (guess === secretNumber) {
//         document.querySelector('.message').textContent = '✅ Correct Number!';
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';

//         // When the number is too high
//     } else if (guess > secretNumber) {
//         if(score > 1) {
//             document.querySelector('.message').textContent = '❌ Too High!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 0;
//             document.querySelector('.message').textContent = "😣 You lost the game!";
//         }

//         //When the number is too low
//     } else if (guess < secretNumber) {
//         if(score > 1) {
//             document.querySelector('.message').textContent = '❌ Too Low!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 0;
//             document.querySelector('.message').textContent = "😣 You lost the game!";
//         }
//     } else if (restart) {}
// });

// // Restarts Window/Game
// document.querySelector('.again').addEventListener('click', function () {
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;

//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').textContent = '';
//     document.querySelector('.message').textContent = '✅ Correct Number!';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
// })


/////////////////////////////////////////////////////////// REDO REDO REDO




// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // When there is no input
//   if (!guess) {
//     displayMessage('❌ No number!');
//   } else if (guess === secretNumber) {

//     displayMessage('✅ Correct Number!');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }


//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? '❌ Too high!' : '❌ Too low!');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage('💥 You lost the game!');
//       document.querySelector('.score').textContent = 0;
//     }
//   }

// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });


//////////////////////////////////////////// 77. Implementing Highscores

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

// When there is no input
if (!guess) {
    displayMessage('❌ No number!');
// When the guess is correct
  } else if (guess === secretNumber) {
    displayMessage('✅ Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
// Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
// If the guess is too high or too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '❌ Too high!' : '❌ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Restarting the game using .again
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
