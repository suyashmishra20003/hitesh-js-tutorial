//* Primitive Types
// Primitive types are //! call by value
// 7 types //? String, Number, Boolean, null, undefined, Symbol, BigInt


//* Reference (Non primitive)

// 3 Types //? Array, Objects, Functions //! call by Reference

/*   
todo    JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at  
todo    runtime and can change throughout the program as we assign different values to them
 */

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id ===  anotherId); //?  false

const bigNumber = 229837372739274238387483789343793798379379374378983493n
//!      Add n to the last of a very big number to convert it automatically to Bigint

BigInt(bigNumber)
// console.log(bigNumber);

let arr = ['hero', 'villan'];

let newObj = {
    name:'suyash',
    isMale:true
}

let myFunc = function (params) {
    console.log('Hello World');
}

// console.table([typeof arr, typeof newObj, typeof myFunc  ])

//? typeof function is function but it is also called as Functionl Object
//* Hence, All Reference (Non primitive) data types are of object type

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory have two types 
//? Stack (Primitive) and Heap (Non-Primitive) memory 

//todo   All primitive types are saved in Stack memory
//todo   All Non-primitive types are saved in Heap memory

let name = 'Suyash'
let anotherName = name

anotherName = 'dummy' //! Call by value
// console.log(name);
// console.log(anotherName);

let obj = {
    name: 'Suyash',
    framework:'React'
}

// let copy = obj  //? Shallow Copy
 let copy =  {...obj} //? Deep Copy
copy.framework = 'Angular'
console.log(obj);
console.log(copy);