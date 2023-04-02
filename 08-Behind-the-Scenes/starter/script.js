'use strict';


//////////////////////////////////////// 93. Scoping in Practice

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         let output = `${firstName}, is ${age}, and was born in ${birthYear}`
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             const firstName = "Steven"
//             const str = `Oh, and you're a millenial, ${firstName}`
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             };
            
//             output = 'New Output'
//         };
//         console.log(output)
//     }
//     printAge();
//     return age;
// }

// const firstName = "Jonas";
// calcAge(1991);

//////////////////////////////////// 95. Hoisting and TDZ in Practice

console.log(me)
console.log(job)
console.log(birthYear)



var me = "Jonas";
let job = "teacher";
const birthYear = 1991;