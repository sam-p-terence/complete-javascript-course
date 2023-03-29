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

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No Number detected!'
    }

});

//////////////////////////////// 74. Implementing the Game Logic