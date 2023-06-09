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

//////////////////////////////////////// 97. The  / this / keyword in practice

// console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAgeArrow(1980);

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year)
//     }
// }
// jonas.calcAge();


// const matilda = {
//     year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f(); 


/////////////////////////////////////// 98. Regular Functions vs. Arrow Functions

// var firstName = 'Matilda';

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function() {
//         // console.log(this);
//         console.log(2037 - this.year);

//         // Solution 1
//         // const self = this;
//         // const isMillenial = function() {
//         //     console.log(self)
//         //     console.log(self.year >= 1981 ** self.year <= 1996)
//         // };

//         // Solution 2
//         const self = this;
//         const isMillenial = () => {
//             console.log(self)
//             console.log(self.year >= 1981 ** self.year <= 1996)
//         };
//         isMillenial()
//     },

//     greet: () => { 
//         console.log(this)
//         console.log(`Hey ${this.firstName}`)
//     },
// };
// jonas.greet();
// jonas.calcAge();


// const addExpr = function (a, b) {
//     console.log(arguments)
//         return a + b;
//     };
// addExpr(2, 5)
    
// var addArrow = (a, b) => {
//     console.log(arguments)
//     return a + b;
// };
// addArrow(2, 5, 8)

////////////////////////// 99. Primitives vs. Objects (Primitive vs. Referense Types)

// let age = 30;
// let oldAge = 30;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: "Jonas",
//     age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friends', friend);
// console.log('Me', me)

//////////////////////////////////// 100. Primitives vs. Objects in Practice


// // Primitive Types
// let lastName = "Williams";
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// // Reference Types
// const jessica = {
//     firstName: "Jessica",
//     lastName: "Williams",
//     age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";
// console.log("Before marriage:", jessica);
// console.log("After marriage:", marriedJessica);

// // marriedJessica = {};

// // Copying Objects
// const jessica2 = {
//     firstName: "Jessica",
//     lastName: "Williams",
//     age: 27,
//     family: ['Alice', 'Bob']
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = "Davis";

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John')

// console.log("Before marriage:", jessica2);
// console.log("After marriage:", jessicaCopy);





     
















    







