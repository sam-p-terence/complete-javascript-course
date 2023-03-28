// 'use strict';

"LECTURE: Functions"

// function describeCountry(country, population, capitalCity) {
//     const countryString = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return countryString;
// }


// const theCountry = describeCountry("Finland", 6, "Helsinki")
// console.log(theCountry)

// console.log(describeCountry("Finland", 6, "Helsinki"));
// console.log(describeCountry("Netherlands", 3, "Amsterdam"));
// console.log(describeCountry("Spain", 10, "Madrid"));

"LECTURE: Function Declarations vs. Expressions"

// Function Declaration
// function percentageOfWorld1(population) {
//     return (population/7900) * 100 ;
// }

// const populationOfChina = percentageOfWorld1(1441);
// const populationOfJapan = percentageOfWorld1(1000);
// const populationOfTaiwan = percentageOfWorld1(300);
// console.log(populationOfChina, populationOfJapan, populationOfTaiwan)


// // Function Expression
// const percentageOfWorld2 = function(population2) {
//     return (population2/7900) * 100;
// }

// const populationOfKorea = percentageOfWorld2(500)
// console.log(populationOfKorea)

"LECTURE: Arrow Functions"

// const percentageOfWorld3 = population => (population / 7900) * 10;

// const percentageOfKorea = percentageOfWorld3(100);
// console.log(percentageOfKorea);

"LECTURE: Functions Calling Other Functions"

// function percentageOfWorld1(population) {
//     return (population/7900) * 100 ;
// }

// function describePopulation(country, population) {
//     const percentageOfWorldWhole = percentageOfWorld1(population)

//     const description = `${country} has ${population} people, which is about ${percentageOfWorldWhole}% of the world`;
//     console.log(description)
// }

// describePopulation("China", 1441);