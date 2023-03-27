
"LECTURE: Values and Variables"


// let country = 'United States of California';
// let continent = 'North America';
// let population = '325 Million'

// console.log(country, continent, population);

"LECTURE: Data Types"

// let isIsland = false;
// let language

// console.log(typeof isIsland, population, country, continent)

// console.log(isIsland);
// console.log(country, continent, population);


"LECTURE: let, const and var"

// language = "English";
// const country = 'Japan';
// const continent = 'Asia';
// let isIsland = false;
// isIsland = true;

// console.log(country, continent, isIsland)


"LECTURE: Basic Operators"

// // const countryHalf = 1 - 1/2
// // console.log(countryHalf)

// const myPopulation = 100
// console.log(myPopulation / 2);

// // myPopulation++

// const finlandPopulation = 6000000;
// console.log(myPopulation > finlandPopulation)

// const averageCountry = 33000000;
// console.log(myPopulation < averageCountry);


// const myCountry = "Portugal"
// const myContinent = "Europe"
// const population1 = "11 Million"

// const description = myCountry + " Is in " + myContinent + ", and its " + population1 + " people speak portugese"
// console.log(description)


"LECTURE: Strings and Template Literals"

// const myCountry = "Portugal"
// const myContinent = "Europe"
// const population1 = "11 Million"

// // const description = myCountry + " Is in " + myContinent + ", and its " + population1 + " people speak portugese"

// const description = `${myCountry} is in ${myContinent} and it's ${population1} people speak portugese`
// console.log(description)

"LECTURE: Taking Decisions: if / else Statements"


// let country = "Portugal"
// let population = 233;


// if (population > 33) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(
//         `${country}'s population is ${33 - population} million below average`,
// );
// }


"LECTURE: Type Conversion and Coercion"

// console.log('9' - '5'); // -> 4
//  console.log('19' - '13' + '17'); // -> '617'
//  console.log('19' - '13' + 17); // -> 23
//  console.log('123' < 57); // -> false
//  console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 114

"LECTURE: Equality Operators: == vs. ==="

// let numNeighbors = prompt("How many neighbour countries does your country have?")
// // numNeighbors = Number("How many neighbour countries does your country have?")

// if(numNeighbors == 1) {
//     console.log('Only 1 border!')
// } else if(numNeighbors > 1) {
//     console.log('More than 1 border')
// } else {
//     console.log('No other border')
// }


"LECTURE: Logical Operators"

// let language = 'english'
// let population = 50
// let isIsland = true
// let country = 'usa'

// if (language === 'english' && population < 50 && !isIsland)
//  {
//  console.log(`You should live in ${country} :)`);
//  } else {
//  console.log(`${country} does not meet your criteria :(`);
//  }

"LECTURE: The switch Statement"

// let language = 'khmer'

// switch(language) {
//         case 'chinese or mandarin':
//             console.log('Most number of speakers')
//             break;
//         case 'spanish':
//             console.log('Second number');
//             break;
//         case 'english':
//             console.log('Third number');
//             break;
//         case 'hindi':
//             console.log('Fourth number');
//                 break;
//         case 'arabic':
//             console.log('Fifth number')
//                 break;
//         default:
//             console.log('Great language too?')
//     }
    


"LECTURE: The Conditional (Ternary) Operator"

// let population = 1000

// const portugal = population >= 900 ? 'above average' : 'below average';

// console.log(`Portugal's population is ${population >= 900 ? 'above average' : 'below average'}`)