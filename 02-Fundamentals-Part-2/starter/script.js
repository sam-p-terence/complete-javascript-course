///////////////////////////////////////////// 32. Activating Strict Mode

'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive');

//// Reserved Object names >>>>

// const interface = 'Audio'
// const private = 534
// const if = 'yes'

//////////////////////////// 33. Functions


// Function and function data
// function logger() {
//     console.log('My name is Jonas')
// };


// // Calling / Running / Invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
    
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0))

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice);

// const num = Number('23');



//////////////////////////////////// 34. Function Declarations vs. Expressions

// // Function Declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991) 
// console.log(age1)


// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1990);
// console.log(age1, age2)



//////////////////////////////////////////////////////// 35. Arrow Functions

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}