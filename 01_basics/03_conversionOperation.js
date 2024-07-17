// let score = "33abc"
let score = null
// let score = undefined
// let score = true 
// let score = false

console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//todo  "33" => 33
//todo  "33abs" => NaN
// todo   null  => 0
//todo   undefined => NaN
//todo   true => 1
//todo   false => 0

let isLoggedIn = "suyash";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//todo   1 => true 
//todo   0 => false
//todo   "" => false
//todo   "suyash" => true


let someNumber = true;
let strNumber = String(someNumber);

// console.log(typeof someNumber);
// console.log( strNumber);


// ****************** Operations *******************

let value = 3 
let negValue = -value
// console.log(negValue); // ? -3 

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**10); //?  this 2 power 2 or (2^10)
// console.log(3%2);
// console.log(+true);// 1
// console.log(+"");  // 0
// console.log(true+);  //? error


// prefix postfix js mdn

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);

// Expected output: "a:4, b:4"

//* If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

//* If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.