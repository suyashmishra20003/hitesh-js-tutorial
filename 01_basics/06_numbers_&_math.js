const score = 400
// console.log(score);

const balance =  new Number(100);
// console.log(balance.toString().length);
// console.log(balance.toFixed(4));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)); //* check before use

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //* inserts commas

//* Maximum and Minimum values in JavaScript
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

console.log('+++++++++++++++++++++++++++++++++++++++++++++++');

// console.log(Math);
// console.log(Math.abs(-4)); 
// console.log(Math.round(4.6)); // mostly used then ceil or floor
// console.log(Math.ceil(4.2)); 
// console.log(Math.floor(4.2)); 
// console.log(Math.min(4,3,6,8)); 
// console.log(Math.max(4,3,6,8)); 

//? gives random number between 0 and 1 
// Math.random()
//* To get values between a minimuum and a maximum value through random 
const min = 0
const max = 256

//! This is a formula used to obtain random values from math.random within a range of 2 numbers
// console.log( Math.floor(Math.random() * (max - min + 1)) + min );

console.log(Math.floor((Math.random() * (max - min  + 1)) + min));