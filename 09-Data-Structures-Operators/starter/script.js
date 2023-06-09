'use strict';

/////////////////////////////////////////// 103. Destructuring Arrays

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },

//     order: function(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//     }
//   },
// };


// const arr = [2,3,4];

// const a = [0];
// const b = [1];
// const c = [2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log( i, j)

// const [i, ,[ j, k]] = nested;
// console.log( i, j, k);

// //default values
// const [p = 1, q= 1, r= 1] = [8, 9];
// console.log( p, q, r);

///////////////////////////////// 104. Destructuring Objects

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//     order: function(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//     },

//     orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//       console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to "${address}" at ${time}`);
//     }
// };

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// })

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 2,
// })
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName, 
//   openingHours: hours, 
//   categories: tags
// } = restaurant
// console.log(restaurantName, hours, tags);



///////////////////////////////////// 105. The Spread Operator (...)

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//     order: function(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], 
//       this.mainMenu[mainIndex]]
//     },

//     orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//       console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to "${address}" at ${time}`);
//     },

//     orderPasta: function(ing1, ing2, ing3) {
//       console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`)
//     }
// };


// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr)

// const NewArr = [1, 2, ...arr];
// console.log(NewArr);

// console.log(...NewArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu)

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 Arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT Objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str}`)

// // Real World Example
// const ingredients = [
// //   prompt('Let\'s make pasta! Ingredient 1?'),
// //   prompt('Let\'s make pasta! Ingredient 2?'),
// //   prompt('Let\'s make pasta! Ingredient 3?')
// ];
// console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients)

// // Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name)


//////////////////////////////////// 106. Rest Pattern and Parameters

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
    
//     order: function(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], 
//       this.mainMenu[mainIndex]]
//     },
    
//     orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//       console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to "${address}" at ${time}`);
//     },
    
//     orderPasta: function(ing1, ing2, ing3) {
//       console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`)
//     },

//     orderPizza: function(mainIngredient, ...otherIngredient) {
//       console.log(mainIngredient);
//       console.log(otherIngredient)
//     },
// };


// // SPREAD, because on the RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log( a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i]
//   console.log(sum)
// };
// add(2, 3);
// add(5, 3, 7, 2)
// add(8 ,2, 5, 3, 2, 1, 4)

// const x = [25, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');


//////////////////////////////////// 107. Short Circuiting (&& and ||)

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
    
//     order: function(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], 
//       this.mainMenu[mainIndex]]
//     },
    
//     orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//       console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to "${address}" at ${time}`);
//     },
    
//     orderPasta: function(ing1, ing2, ing3) {
//       console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`)
//     },

//     orderPizza: function(mainIngredient, ...otherIngredient) {
//       console.log(mainIngredient);
//       console.log(otherIngredient)
//     },
// };

// // Can use ANY data type, return ANY data type, short-circuiting
// console.log( 3 || 'Jonas')
// // console.log( 3 && 'Jonas')
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log( undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null)
// // Returns the first truthy value

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10
// console.log(guests2);

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');

// // Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach')
// };

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')

//////////////////////////////////////// 108. The Nullish Coalescing Operator (??)

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
    
//     order: function(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], 
//       this.mainMenu[mainIndex]]
//     },
    
//     orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//       console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to "${address}" at ${time}`);
//     },
    
//     orderPasta: function(ing1, ing2, ing3) {
//       console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`)
//     },

//     orderPizza: function(mainIngredient, ...otherIngredient) {
//       console.log(mainIngredient);
//       console.log(otherIngredient)
//     },
    
// };

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and/or undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


///////////////////////////////////// 109. Logical Assignment Operators


// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
    
//     order: function(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], 
//       this.mainMenu[mainIndex]]
//     },
    
//     orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//       console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to "${address}" at ${time}`);
//     },
    
//     orderPasta: function(ing1, ing2, ing3) {
//       console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`)
//     },

//     orderPizza: function(mainIngredient, ...otherIngredient) {
//       console.log(mainIngredient);
//       console.log(otherIngredient)
//     },
// };

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment Operator
// // rest2.owner = rest2.owner && '<ANNONYMOUS>';
// // rest1.owner = rest1.owner && '<ANNONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'

// console.log(rest1)
// console.log(rest2)

/////////////////////////////////////// 110. Coding Challenge #1


// // const players = [
// //   "Davies",
// //   "Muller",
// //   "Lewandowski",
// //   "Kimmich",
// // ];

// // let team1 = [];
// // let team2 = [];

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//     'Neuer',
//     'Pavard',
//     'Martinez',
//     'Alaba',
//     'Davies',
//     'Kimmich',
//     'Goretzka',
//     'Coman',
//     'Muller',
//     'Gnarby',
//     'Lewandowski',
//     ],
//     [
//     'Burki',
//     'Schulz',
//     'Hummels',
//     'Akanji',
//     'Hakimi',
//     'Weigl',
//     'Witsel',
//     'Hazard',
//     'Brandt',
//     'Sancho',
//     'Gotze',
//     ],
//   ],
//     score: '4:0',
//     scored: 
//       ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },
//   };
 
// // players1 = [];
// // players2 = [];
// // gk = ''
// // fieldPlayers = ['']

// // test = if(index.players[0, 0]) {
// //   index[i] = gk.textContent
// // } else {
// //   Array.length = fieldPlayers
// // }
// // console.log(test)

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2)

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic']
// console.log(players1Final)

// // 5.
// const {odds: { team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);

// // 6. 
// const printGoals = function(...players) {
//   console.log(players)
//   console.log(`${players.length} goals were scored`)
// }
// // printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// // printGoals("Davies", "Muller");
// printGoals(...game.scored)

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win')
// team1 > team2 && console.log('Team 1 is more likely to win')

///////////////////////////////////////// 111. Looping Arays: The for-of Loop


// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
    
//     order: function(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], 
//       this.mainMenu[mainIndex]]
//     },
    
//     orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//       console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to "${address}" at ${time}`);
//     },
    
//     orderPasta: function(ing1, ing2, ing3) {
//       console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`)
//     },

//     orderPizza: function(mainIngredient, ...otherIngredient) {
//       console.log(mainIngredient);
//       console.log(otherIngredient)
//     },
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// };

// // console.log([...menu.entries()]);

//////////////////////////////////////// 112. Enhanced Object Literals

// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
//   [`day-${2 + 4}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
//     //ES6 Enhanced Object Literals
//   openingHours,
    
//     order(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], 
//       this.mainMenu[mainIndex]];
//     },
    
//     orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//       console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to "${address}" at ${time}`);
//     },
    
//     orderPasta(ing1, ing2, ing3) {
//       console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
//     },

//     orderPizza(mainIngredient, ...otherIngredient) {
//       console.log(mainIngredient);
//       console.log(otherIngredient);
//     },
// };


////////////////////////////////////// 113. Optional Chaining (?.)


// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
//     //ES6 Enhanced Object Literals
//   openingHours,
    
//     order(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], 
//       this.mainMenu[mainIndex]];
//     },
    
//     orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//       console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to "${address}" at ${time}`);
//     },
    
//     orderPasta(ing1, ing2, ing3) {
//       console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
//     },

//     orderPizza(mainIngredient, ...otherIngredient) {
//       console.log(mainIngredient);
//       console.log(otherIngredient);
//     },
// };

// if (restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);

// // WITH Optional Chaining (?.)

// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours?.mon?.open)

// // EXAMPLE
// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`on ${day}, we open at ${open}`);
// };

// // Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');

// // Arrays
// const users = [
//   {name: 'Jonas', email: 'hello@jonas.io'}
// ];

// console.log(users[0]?.name ?? 'User array is empty')


///////////////////////////////// 114. Looping Objhects: Object Keys, Values, Entries


// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
//     //ES6 Enhanced Object Literals
//   openingHours,
    
//     order(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], 
//       this.mainMenu[mainIndex]];
//     },
    
//     orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//       console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to "${address}" at ${time}`);
//     },
    
//     orderPasta(ing1, ing2, ing3) {
//       console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
//     },

//     orderPizza(mainIngredient, ...otherIngredient) {
//       console.log(mainIngredient);
//       console.log(otherIngredient);
//     },
// };


// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties)

// let openStr = `We are open on ${properties.length} days: `

// for(const day of Object.keys(openingHours)) {
//   openStr += `${day}, `
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);

// // Entire Object
// const entries = Object.entries(openingHours);

// // [key, value]
// for( const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`)
// };

/////////////////////////////////////////////////// Coding Challenge 2


// const players = [
//   "Davies",
//   "Muller",
//   "Lewandowski",
//   "Kimmich",
// ];

// let team1 = [];
// let team2 = [];

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//     'Neuer',
//     'Pavard',
//     'Martinez',
//     'Alaba',
//     'Davies',
//     'Kimmich',
//     'Goretzka',
//     'Coman',
//     'Muller',
//     'Gnarby',
//     'Lewandowski',
//     ],
//     [
//     'Burki',
//     'Schulz',
//     'Hummels',
//     'Akanji',
//     'Hakimi',
//     'Weigl',
//     'Witsel',
//     'Hazard',
//     'Brandt',
//     'Sancho',
//     'Gotze',
//     ],
//   ],
//     score: '4:0',
//     scored: 
//       ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },
//   };

// // 1.
// for(const [i, player] of game.scored.entries()) 
// console.log(`Goal ${i + 1}: ${player}`)

// // 2.
// let average = 0;
// for (const odd of Object.values(game.odd))
//   average += odd;
//   average /= 
//   console.log(average)

//////////////////////////////////////////////////// 116. Sets


// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
//     //ES6 Enhanced Object Literals
//   openingHours,
    
//     order(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], 
//       this.mainMenu[mainIndex]];
//     },
    
//     orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//       console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to "${address}" at ${time}`);
//     },
    
//     orderPasta(ing1, ing2, ing3) {
//       console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
//     },

//     orderPizza(mainIngredient, ...otherIngredient) {
//       console.log(mainIngredient);
//       console.log(otherIngredient);
//     },
// };


// const ordersSet = new Set ([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza'
// ]);
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size)
// console.log(new Set('jonasschmedtmann').size);


//////////////////////////////////////////////// 117. Maps: Fundamentals


// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
//     //ES6 Enhanced Object Literals
//   openingHours,
    
//     order(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], 
//       this.mainMenu[mainIndex]];
//     },
    
//     orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//       console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to "${address}" at ${time}`);
//     },
    
//     orderPasta(ing1, ing2, ing3) {
//       console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
//     },

//     orderPizza(mainIngredient, ...otherIngredient) {
//       console.log(mainIngredient);
//       console.log(otherIngredient);
//     },
// };

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Fireenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed')

// console.log(rest.get('name'))
// console.log(rest.get(true))
// console.log(rest.get(1))

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest)
// console.log(rest.size)

// console.log(rest.get([1,2]))


//////////////////////////////////// 118. Maps: Iteration

// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
//     //ES6 Enhanced Object Literals
//   openingHours,
    
//     order(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], 
//       this.mainMenu[mainIndex]];
//     },
    
//     orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//       console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to "${address}" at ${time}`);
//     },
    
//     orderPasta(ing1, ing2, ing3) {
//       console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
//     },

//     orderPizza(mainIngredient, ...otherIngredient) {
//       console.log(mainIngredient);
//       console.log(otherIngredient);
//     },
// };

// // const question = new Map([
// //   ['question', 'What is the best programming language in the world?'],
// //   [1, 'C'],
// //   [2, 'Java'],
// //   [3, 'JavaScript'],
// //   ['correct', 3],
// //   [true, 'Correct!'],
// //   [false, 'Try Again!'],
// // ]);
// // console.log(question);

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);


// // Convert Object to MAP
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// // Quiz App
// console.log(question.get('question'))
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer)


// console.log(question.get(question.get('correct') === answer))