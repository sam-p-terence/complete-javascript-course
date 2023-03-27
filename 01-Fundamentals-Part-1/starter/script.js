
/////////////////////// 10. Values and Variables 


// let js = 'amazing';
// console.log(40+8+23-10);

// console.log('Jonas');
// console.log(23)

// let firstName = 'Matilda';
// let first = 'Jonas'
// let firstNamePerson = 'Yoo'
// let first_name_person = 'Yee'

// console.log(firstName);
// console.log(firstNamePerson);
// console.log(first_name_person);


// Variable name conventions >>>> 

// let jonas_matilda = 'JM';
// let $function = 27;

// let person = 'Jonassss'
// let PI = 3.1415;

// let myFirstJob = 'coder';
// let myCurrentJob = 'Teacher';

// let job1 = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob)



///////////////////////// 12. Data Types


// let dataTypes = [
//     ('Number'),
//     ('String'),
//     ('Boolean'),
//     ('Undefined'),
//     ('Null'),
//     ('Symbol (ES2015)'),
//     ('BigInt (ES2020)')
// ]

// console.log(dataTypes)

// let javascriptIsFun = true
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// javascriptIsFun = 'Yes';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991
// console.log(typeof year);

// console.log(typeof null);


//////////////////////////////// 13. let, const and var

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;
// // const job;

// var job = 'programmer';
// job = 'teacher';

// let lastName = 'Schement';
// console.log(lastName)

/////////////////////////////// 14. LECTURE: Basic Operators

// // Math Operators
// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// // 2 ** 3 ,eams 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + " " + lastName);


// // Assignment Operators
// let x = 10 + 5;
// x += 10; // x = x + 10 
// x *= 4; // x = x * 4 = 100
// x++;  // x = x + 1
// x--; // x = x - 1
// x--;
// console.log(x);

// // Comparison Operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18)

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2019)



/////////////////////////////////// 15. Operator Precedence


// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// // console.log( 25 - 10 - 5)

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge);


///////////////////////////////////// 16. Coding Challenge #1


// let markMass = 78 
// let markHeight = 1.69
// let johnMass = 92
// let johnHeight = 1.95

// let markMass = 95 
// let markHeight = 1.88
// let johnMass = 85
// let johnHeight = 1.76


// let markBMI = (markMass / markHeight ** 2)
// let johnBMI = (johnMass / johnHeight ** 2)

// let comparison = markBMI > johnBMI

// console.log(markBMI, johnBMI, comparison)


/////////////////////////// 17. Strings and Template Literals

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037


// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// console.log(jonasNew)

// console.log(`Just a regular string...`);


// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String with
// multiple
// lines`)


///////////////////////// 18. Taking Decisions: IF / Else Statements

// const age = 15 ;
// // const isOldEnough = age >= 18;
// // console.log(isOldEnough)

// if(age >= 18) {
//     console.log('Sarah can start driving licence');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// };

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century)


//////////////////////////////////////////////// 19. Coding Challenge #2



// let markMass = 78 
// let markHeight = 1.69
// let johnMass = 92
// let johnHeight = 1.95


// let markBMI = (markMass / markHeight ** 2)
// let johnBMI = (johnMass / johnHeight ** 2)

// let comparison = markBMI > johnBMI

// // console.log(markBMI, johnBMI, comparison)


// if( markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`)
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's! (${markBMI})`)
// };



/////////////////////////////////////////////// 20. Type Conversion and Coercion

// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number (inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23)

// //type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' + '10' + 3);
// console.log('23' * '2');

// let n = '1' + 1; // '11'
// n = n -1; // '11 - 1 = 10'
// console.log(n);

// 2+3+4+'5'



/////////////////////////////// 21. Truthy and Falsy Values

// Five falsy values: 0, ''. uimdefined, null, NaN;

// console.log(Boolean(0));
// console.log(Boolean(undefined))
// console.log(Boolean('Jonas'))
// console.log(Boolean({}))
// console.log(Boolean(''))

// const money = 10;
// if(money) {
//     console.log("Don't spend it all ;)")
// } else {
//     console.log('You should get a job.')
// };

// let height = 0;
// if(height) {
//     console.log('Yay, height is defined')
// } else {
//     console.log('Height is UNDEFINED')
// }


//////////////////////////////////////// 22. Equality Operators == vs. ===

// // const age = 18;
// // if (age === 18) console.log('You just became an adult :D (strict)');
// // if (age == 18) console.log('You just became an adult :D (loose)');

// const favorite = Number(prompt("What's your favorite number?"));
// // console.log(favorite)
// // console.log(typeof favorite)

// if (favorite === 23) { 
//     console.log(`${favorite} is an amazing number!`)
// } else if(favorite === 7) {
//     console.log(`${favorite} is an amazing number as well!`)
// } else if(favorite === 9) {
//     console.log(`${favorite} is an amazing number as well part two!`)
// } else {
//     console.log('Number is not 23 or 7 or 9')
// }

// if(favorite !== 23) console.log('Why not 23?')


////////////////////////////////////////////////// 23. Boolean Logic


///////////////////////////////////////////////// 24. Logical Operators

// const hasDriversLicense = true // A
// const hasGoodVision = true // B

// // console.log(hasDriversLicense && hasGoodVision) // false
// // console.log(hasDriversLicense || hasGoodVision) // true
// // console.log(!hasDriversLicense); // false

// const shouldDrive = hasDriversLicense && hasGoodVision

// // if(hasDriversLicense && hasGoodVision) {
// //     console.log('Sarah is able to drive!')
// // } else {
// //     console.log('Someone else should drive...')
// // }

// const isTired = false; // C
// // console.log(hasDriversLicense && hasGoodVision && isTired)

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }


///////////////////////////////////////// 25. Coding Challenge #3


// let averageDolphin = (96 + 108 + 89) / 3
// let averageKoala = (88 + 91 + 110) / 3

// console.log(averageDolphin && averageKoala) // Average of both teams
// console.log(averageDolphin || averageKoala) // Average of winning team
// console.log(`Dolphins scored ${averageDolphin}`)
// console.log(`Koalas scored ${averageKoala}`)

// if(averageDolphin > averageKoala) {
//     console.log("Dolphins have a higher average!");
// } else if(averageKoala > averageDolphin) {
//     console.log("Koalas have a higher average");
// } else {
//     console.log("There was a tie! Both are winners.")
// }



////////////////////////////////////////////// 23. The Switch Statement


