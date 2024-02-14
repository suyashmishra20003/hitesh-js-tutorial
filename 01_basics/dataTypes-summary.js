//* Primitive Types
// Primitive types are //! call by value
// 7 types //? String, Number, Boolean, null, undefined, Symbol, BigInt

//* Reference (Non primitive)

// 3 Types //? Array, Objects, Functions //! call by Reference

/*   
todo    JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at  
todo    runtime and can change throughout the program as we assign different values to them
 */

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id ===  anotherId); //?  false

const bigNumber = 229837372739274238387483789343793798379379374378983493n;
//!      Add n to the last of a very big number to convert it automatically to Bigint

BigInt(bigNumber);
// console.log(bigNumber);

let arr = ["hero", "villan"];

let newObj = {
  name: "suyash",
  isMale: true,
};

let myFunc = function (params) {
  console.log("Hello World");
};

// console.table([typeof arr, typeof newObj, typeof myFunc  ])

//? typeof function is function but it is also called as Functionl Object
//* Hence, All Reference (Non primitive) data types are of object type

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory have two types
/*


* Memory Management in JavaScript:

?   JavaScript primarily allocates memory on the heap, regardless of data type.
?    The heap is a larger, dynamically managed memory space for objects.
?    The stack is used for function call information and primitive values only when passed by value.

*    Primitive vs. Non-Primitive Data Types:

?    Primitive types: boolean, number, string, null, undefined, Bigint, Symbol
    These hold their actual values directly in memory.
    When passed as function arguments, copies of their values are passed (call by value). 
    Modifying the arguments within the function does not affect the original variables.

?    Non-primitive types: function, array, object
    These refer to memory locations (pointers) on the heap where the actual data is stored.
    When passed as function arguments, references to these memory locations are passed (call by reference). 
    Modifying the arguments within the function modifies the original objects.
*/

let x = 3; // Primitive (number)
function modifyPrimitive(arg) {
  arg = 10; // Modifying the copy, doesn't affect x
}
modifyPrimitive(x); // x remains 3 (call by value)

let y = [1, 2, 3]; // Non-primitive (array)
function modifyArray(arr) {
  arr[0] = 5; // Modifying the array itself
}
modifyArray(y); // y becomes [5, 2, 3] (call by reference)



// --------------------------------------------------
let name = "Suyash";
let anotherName = name;

anotherName = "dummy"; //! Call by value
// console.log(name);
// console.log(anotherName);

let obj = {
  name: "Suyash",
  framework: "React",
};

// let copy = obj  //? Shallow Copy
let copy = { ...obj }; //? Deep Copy
copy.framework = "Angular";
// console.log(obj);
// console.log(copy);
