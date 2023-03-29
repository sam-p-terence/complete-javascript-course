// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temps = [
    17, 21, 23,
]
const temps2 = [
    12, 5, -5, 0, 4,
]

// function printForcast(Array) {
//     console.log(`${Array[0]} degrees celcius in 1 days.
//     ${Array[1]} degrees celcius in 2 days.
//     ${Array[2]} degrees celcius in 3 days.`)
// }

// printForcast(temps);
// printForcast(temps2);

console.log(`...${temps[0]} C ... ${temps[1]} C ... ${temps[2]} C ...`);

const printForcast = function(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}ºc`
    }
    console.log(str)
}

printForcast(temps);
printForcast(temps2);