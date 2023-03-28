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

"LECTURE: Introduction to Arrays"

// const populationss = [
//     "Taiwan",
//     "Cambodia",
//     "Israel",
//     "Germany"
// ];

// // const count = populations.filter(Boolean).length
// // console.log(count)

// const percentagess = [
//     1.5,
//     0.5,
//     0.7,
//     2.1
// ]

// const populations = [10, 1441, 332, 83];
//  console.log(populations.length === 4);
//  const percentages = [
//  percentageOfWorld1(populations[0]),
//  percentageOfWorld1(populations[1]),
//  percentageOfWorld1(populations[2]),
//  percentageOfWorld1(populations[3])
//  ];
//  console.log(percentages);

"LECTURE: Basic Array Operations (Methods)"

// const neighbors = [
//     "France",
//     "Sweden",
//     "Italy",   
// ];

// const newLength = neighbors.push('Utopia');
// // console.log(neighbors)

// let removeNeighbor = neighbors.pop();
// // console.log(neighbors)

// if(neighbors.includes('Germany')) {
//     console.log("Probably not a European Country")
// };

// neighbors[neighbors.indexOf('France')] = 'Portugal';

// console.log(neighbors)

"LECTURE: Introduction to Objects"

// let myCountry = {
//     country: "Cambodia",
//     capital: "Phnom Penh",
//     language: "Angkorian/Khmer",
//     neighbors: "Laos"
// }

"LECTURE: Dot vs. Bracket Notation"

// let finland = {
//     country: "Finland",
//     population: 6,
//     language: "Finnish",
//     neighbors: 3,
//     capital: "Helsinki",
// }

// console.log(`${finland.country} has ${finland.population} million ${finland.language} speaking people, ${finland.neighbors} neighoring countries, and a capital named ${finland.capital}.`)

"LECTURE: Iteration: The for Loop"

// for(let voter = 1; voter <= 50; voter++){
//     console.log(`We are currently on voter ${voter}`)
// }


