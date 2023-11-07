
const userEmail = []

// if (userEmail) {
//     console.log('Got User Email');
// }else{
//     console.log('Do not have user email');
// }

//* FALSY VALUES
//!         false, -0n, BigInt, 0n, null, undefined, NaN

//* TRUTHY VALUES
//!         "0", 'false', " ", [], {}, funtion(){}, 

//* To Check array is empty or not

// if(userEmail.length === 0){
//     console.log('Array is empty');
// }

//* To Check Object is empty or not

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty");
// }

//*  Nullish Coalescing Operator (??) : null undefined
//? It is a safety check for null and undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15 ?? 30

// console.log(val1);

//* Terniary Operator

//!   condition ? true : false


const ice = 100;

ice <= 80 ? console.log("Less tham 80") : console.log("More than 80");