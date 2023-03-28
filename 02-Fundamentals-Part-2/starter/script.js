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

// Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// Arrow function
// const calcAge3 = birthYear => (2037) - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement}`
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1992, 'Terence'));


/////////////////////////////////////////// 36. Functions Calling Other Functions


// function cutFruitPieces(fruit) {
//     return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges)

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

////////////////////////////////////////// 37. Reviewing Functions


// const calcAge = function(birthYear) {
//     return 2037 - birthYear
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log (`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }

// }


// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

/////////////////////////////////////////// 38. Coding Challenge #1


// function checkWinner(avgDolphins, avgKoalas) {
//     const largest = Math.max(calculateScore)
//     return `${largest} scored higher than the opposer!`
// }


// function calcAverage(name, score1, score2, score3) {
//     const calculateScore = (score1 + score2 + score3) / 3;
//     // console.log(calcAverage)
//     return `${name} scored an average of ${calculateScore}`
// }

// console.log(calcAverage("Koalas", 44, 23, 71))
// console.log(calcAverage("Dolphins", 65, 34, 49))





// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(3, 4 , 5))

// // Test 1
// const scoreDolphins = calcAverage(44, 23, 71)
// const scoreKoalas = calcAverage(65, 54, 49)
// console.log(scoreDolphins, scoreKoalas)

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins are winners! (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas are winners! (${avgDolphins} vs. ${avgKoalas})`);
//     } else {
//         console.log('No one won')
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(574, 23)


///////////////////////////////////////// 39. Introduction to Arrays

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(y)

// console.log(friends[0], friends[1], friends[2])
// console.log(friends[friends.length - 1])
// console.log(friends.length)

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']

// const firstName = 'Jonas'
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

// console.log(jonas.length)

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);
// console.log(age1, age2, age3)

// const ages = [
//     calcAge(years[0]), 
//     calcAge(years[1]), 
//     calcAge(years[years.length - 1])
// ];
// console.log(ages)

/////////////////////////////////// 40. Basic Array Operations (Methods)

// const friends = [
//     'Michael', 
//     'Steven', 
//     'Peter'
// ];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength)

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped)
// console.log(friends)

// friends.shift(); // First
// console.log(friends)

// console.log(friends.indexOf('Steven')); // Checks the element variable
// console.log(friends.indexOf('Bob'));

// // console.log(friends.includes('Steven')) // Boolean if the element exists
// // console.log(friends.includes('Bob'))

// friends.push(23);
// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))
// console.log(friends.includes(23))

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven')
// };