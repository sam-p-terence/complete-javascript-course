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


// // Hoisting with Variables
// // console.log(me);
// // console.log(job);
// // console.log(birthYear);

// // var me = "Jonas";
// // let job = "teacher";
// // const birthYear = 1991;

// console.log(addDecl(2, 3))
// // console.log(addExpr(2, 3))
// // console.log(addArrow)
// // console.log(addArrow(2, 3))

// // Functions
// function addDecl(a, b) {
//     return a + b;
// };

// var addExpr = function (a, b) {
//     return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example
// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted!');
// };

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);