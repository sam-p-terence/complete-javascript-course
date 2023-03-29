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

////////////////////////////////////// 40. Basic Array Operations (Methods)

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

/////////////////////////////////// 41. Coding Challenge #2


// const calcTip = bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2;
// console.log(`The bill was ${bills}, the tip was ${tips}, and the total value was ${ bills + tips}`);


// const calcTips = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// // const calcTipss = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // Arrow Function


// const bills = [
//     125, 555, 44,
// ];

// const tips = [
//     [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])]
// ];
// console.log(bills, tips)


// const sum = tips.reduce((partialSum, a) => partialSum + a, 0);
// console.log(sum)

// const totals = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2],
// ];
// console.log(totals)


//////////////////////////////////// .42 Introduction to Objects

// const jonasArray = [
//     'Jonas',
//     'Schemtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'pter', 'steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schemtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'pter', 'steven'],
// };


///////////////////////////////////////////// 43. Dot vs Bracket Notation

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Pter', 'Steven'],
// };


// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// const interestedIn = prompt(
//     'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.'
// );

// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@me';
// console.log(jonas)

// // Challenge 
// // "Jonas has 3 friends, and his best friend is called Michael"

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is named ${jonas.friends[0]}.`)


///////////////////////////////////////////// 44. Object Methods

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
  
//     // calcAge: function (birthYeah) {
//     //   return 2037 - birthYeah;
//     // }
  
//     // calcAge: function () {
//     //   // console.log(this);
//     //   return 2037 - this.birthYeah;
//     // }
  
//     calcAge: function () {
//       this.age = 2037 - this.birthYear;
//       return this.age;
//     },
  
//     getSummary: function () {
//       return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
//   };
  
//   console.log(jonas.calcAge());
  
//   console.log(jonas.age);
//   console.log(jonas.age);
//   console.log(jonas.age);
  
//   // Challenge
//   // "Jonas is a 46-year old teacher, and he has a driver's license"
//   console.log(jonas.getSummary());


  ///////////////////////// 45. Coding Challenge #3

// let markMass = 78 
// let markHeight = 1.69
// let johnMass = 92
// let johnHeight = 1.95


// let markBMI = (markMass / markHeight ** 2)
// let johnBMI = (johnMass / johnHeight ** 2)

// let comparison = markBMI > johnBMI

// console.log(markBMI, johnBMI, comparison);

// let mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = mark.mass / mark.height ** 2;
//         return this.bmi
//     },

// };
// mark.calcBMI()
// console.log(mark.bmi)

// let john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = john.mass / john.height ** 2;
//         return this.bmi
//     },
// }
// john.calcBMI()
// console.log(john.bmi)

// // function checkHigherBmi(avg, avg2) {
// //     const largest = Math.max([], [])
// //     return `${john.fullName} has a higher BMI!`
// // }

// // console.log(checkHigherBmi(mark[3], john[3]))

// if(mark.bmi > john.bmi) {
//     console.log(`${mark.fullName} has a higher BMI`)
// } else {
//     console.log(`${john.fullName} has a higher BMI`)
// }



////////////////////////// 46. Iteration: The for Loop

// console.log('Lifting weights 1')
// console.log('Lifting weights 2')
// console.log('Lifting weights 3')
// console.log('Lifting weights 4')
// console.log('Lifting weights 5')
// console.log('Lifting weights 6')
// console.log('Lifting weights 7')
// console.log('Lifting weights 8')
// console.log('Lifting weights 9')
// console.log('Lifting weights 10')

// for loop keeps running while the condition is TRUE
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights ${rep}`)
// }


////////////////////////////////////// 47. Looping Arrays, Breaking & Continuing

// const jonasArray = [
//     'Jonas',
//     'Schemtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];

// const types = [];

// // let arrayLength = jonasArray.length;
// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof jonasArray[i]);

// // types[0] = 'string'
// types.push(typeof jonasArray[i])
// }

// console.log(types)


// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++){
//    ages.push(2037 - years[i]);
// }
// console.log(ages)

// // Continue and Break

// // STRINGS ONLY
// for (let i = 0; i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] !== 'string') continue;

//     console.log(jonasArray[i], typeof jonasArray[i])
// }

// // NUMBER ONLY
// for (let i = 0; i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] !== 'number') continue;

//     console.log(jonasArray[i], typeof jonasArray[i])
// }


/////////////////////////////// 48. Looping Backwards and Loops in Loops

// const jonas = [
//     'Jonas',
//     'Schemtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];

// for(let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i])
// }

// for(let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`--------- Starting Exercise ${exercise}`);
//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Exercise ${exercise} Lifting weight repitition ${rep}`)
//     }
// }

////////////////////////////// 49. The While Loop


// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`FOR: Lifting weights repitition ${rep}`)
// }

// let rep = 1
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repitition ${rep}`)
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice)

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('You rolled a 6!')
// };


///////////////////////////////////// 50. Coding Challenge #4

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
//   }
// //   console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       // sum = sum + arr[i];
//       sum += arr[i];
//     }
//     return sum / arr.length;
//   };
//   console.log(calcAverage([2, 3, 7]));
//   console.log(calcAverage(totals));
//   console.log(calcAverage(tips));
  

//final