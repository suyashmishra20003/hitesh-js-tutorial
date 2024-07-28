//todo '==' vs '==='

// == equality operator
// === strict equality operator, also cheks type along with value

//todo var, let ,const

/*
function name (){
    var sm = 'suaysk'
    
    if(true){
      var sm = 'lskdj'
      console.log(sm)
    }
        console.log(sm)
  }
  
  name() // lskdj,lskdj

  function name (){
    let sm = 'suaysk'
    
    if(true){
      let sm = 'lskdj'
      console.log(sm)
    }
        console.log(sm)
  }
  
    name() // lskdj,suaysk


  function name (){
    let const = 'suaysk'
    
    if(true){
      let const = 'lskdj'
      console.log(sm)
    }
        console.log(sm)
  }
  
      name() // lskdj,suaysk

*/

//todo  JavaScript Symbols

/*
Symbols are a primitive data type introduced in ECMAScript 6 (ES6). They are unique and immutable, and they are often used to create unique property keys for objects, ensuring that no property keys collide.

?   Characteristics of Symbols:
- Uniqueness: Every Symbol is unique, even if they have the same description.
- Non-iterable: Symbols do not appear in for-in loops and are not included in Object.keys() or Object.getOwnPropertyNames().
- Usage as Object Keys: Symbols can be used as keys for object properties, which ensures that the property key is unique.
*/
const sym = Symbol('id');
let symObj = {
    [sym]: 1,
    name:'Shikhar',
    age:22
}


for (const key in symObj) {
    if (Object.hasOwnProperty.call(symObj, key)) {
        const element = symObj[key];
        console.log(element);
    }
}
console.log(symObj);

//todo rest and spread operator

/*

* spread operator

It can be used for 

? Copying Objects:
When copying an object, the spread operator creates a shallow copy, meaning only the first level is copied, and nested objects will still refer to the same memory location.
let obj = {
    name: 'Suyash',
    age: 28,
    marks: 98,
    height: 5.9
};
console.log(obj);

let copy = {...obj};
copy.marks = 25;

console.log(copy); // { name: 'Suyash', age: 28, marks: 25, height: 5.9 }
console.log(obj); // { name: 'Suyash', age: 28, marks: 98, height: 5.9 }

! Note: The spread operator only performs a shallow copy, which means nested objects are not deeply copied. For deep copying, you can use libraries like Lodash or structuredClone.

? Merging Arrays:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]


* Rest Operator 

The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to handle variadic functions.



example

function add(a, b, ...args) {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return a + b + total;
}

let result = add(1, 2, 3, 4, 5, 6);
console.log(result); // Output: 21


Spread Operator (...): Used to expand elements of an iterable (e.g., array or object) into places where multiple elements are expected. Useful for copying and merging objects and arrays.
Rest Parameter (...args): Allows a function to accept an indefinite number of arguments as an array. Useful for handling functions with variable numbers of arguments.

*/

//todo closure example

function outer (){
    let secret = 'Arun';
    function inner (){
      console.log(secret)
    }
    // Here not  only the inner function but also its scope( Lexical Scope ) of parent is also returned
    return inner;
  }
  
const run = outer();
  
// run()

//todo  currying example

function currying(val1){
    return function (val2){
        return function (val3){
            return val1 + val2 + val3;
        }
    }
}

const curry = currying(10)(15)(20);

// console.log(curry)

//todo   Execution Context example
const addOne = (value) => value + 1;
const addTwo = (value) => addOne(value + 2);
const addThree = (value) => addTwo(value + 3);
const calculation = () => {
  return addThree(1) + addTwo(2);
};
// console.log(calculation());

/*
In first phase  call stack the order will be
? call stack 1 
addOne
addTwo
addThree
calculate
global

? call stack 2
addOne
addTwo
calculation
global
*/

//* Call, Bind and Apply
//? These methods are used to explicitly set the this context for a function. They are particularly useful when working with objects and ensuring that the correct context is used within a function.


//todo Call

let obj = {
    age : 29
}

function intro(name, city, func ){
    console.log(`My name is ${name} and I live in ${city}. My age is ${this.age} \n ${func}`);
}


// intro.call(obj, 'Suyash', 'Pune', 'call');


//todo Apply

// intro.apply(obj, ['Suyash', 'Pune', 'apply']);

//? Here both call and apply are doing the same thing. They both are used to pass a specific this context to a function.
//? // But the major difference between call and apply is that apply takes an arguments array as input while call takes an argument list as input.

//todo Bind

//?Purpose: Returns a new function with a specified this context and optional arguments. The new function can be invoked later.
// const bindFunc = intro.bind(obj, 'Suyash', 'Sydney','bind');


/*
?   call(): Invokes the function immediately with a specified this context and individual arguments.
?   apply(): Invokes the function immediately with a specified this context and arguments as an array.
?   bind(): Returns a new function with a specified this context and optional arguments, which can be invoked later.

*/





function functionName(){

        var sm = 'sjjs'

}
// console.log(functionName())

//todo Promise, async, await

const promiseOne = new Promise((resolve, reject)=>{
    let str = 'suyash'
    if(false){
        resolve(str);
    }else{
        reject('ERROR Occured !!! Something went wrong ')
    }
})

/*
A promise basically has 3 states resolve reject and pending.
A promise in js is once initialized can never be removed from memory.
We can chain promise with then, catch and finally
then is fired when promise is resolved
catch is fired when promise is rejected
finally is fired when promise is either resolved or rejected
we can chain multiple then methods to a promise. A single then wil always retun the resolved value
*/
promiseOne.then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err,'Catch Called')
}).finally(()=>{
    console.log('Promise is either resolved or rejected');
})


async function consumePromiseOne(params) {
    try {
        const result = await fetch('www.google.com');
        const data = await result.json();
        console.log(data) ;
    } catch (error) {
        console.log(error);
    }

}

// consumePromiseOne()

//todo arrow functions

// Arrow Functions: Provide a concise syntax and inherit this from the surrounding lexical scope.
// Syntax: (param1, param2) => expression or (param1, param2) => { /* multiple statements */ }.
// Differences: Arrow functions do not have their own this context or arguments object.

let abs = 'Suyash';

setTimeout(() => {
    let name = 'Shikhar';
    console.log(name, abs);
}, 1000);

//todo JS Execution

/*
In Js execution the process by which the callback is taken from the task queue and inserted into the call stack to be executed is achieved by event loop

let's take an example

let abs = 'Suyash';

setTimeout(() => {
    let name = 'Shikhar';
    console.log(name, abs);
}, 1000);

let sum = 1 + 2 + abs

here, 
components used 
Callbacks
call stack 
API
event loop
task Queue

Key Components

Call Stack:

The call stack is where JavaScript keeps track of function calls. It operates in a LIFO (Last In, First Out) manner. When a function is called, it's added to the top of the stack. When the function returns, it's removed from the stack.

Web APIs:

Web APIs are provided by the browser (or the environment in the case of Node.js) for asynchronous operations like setTimeout, fetch, DOM events, etc. When an asynchronous function is called, the browser handles it in the background.
Callback Queue (Task Queue):

The callback queue is where the results of completed asynchronous operations are placed. It operates in a FIFO (First In, First Out) manner.

Event Loop:

The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first callback from the callback queue and pushes it onto the call stack for execution.

so the overall process is like this 
call stack => api => task Queue ==> taken out  by event loop and inserted back in call stack for exceution

*/


//todo Differences Between null and undefined

/*
Purpose:
null is used to explicitly indicate "no value".
undefined is used when a variable has not been assigned a value.


Type:
typeof null returns "object".
typeof undefined returns "undefined".


Usage:
null is typically used when you want to intentionally clear the value of a variable.
undefined is used by JavaScript to indicate the absence of a value when a variable is declared but not yet initialized, or when a function parameter is not provided.


*/

//todo IFFEs

// (function() {
//     //  Code here runs immediately and has its own scope
//     console.log('This is an IIFE');
// })();

// (() => {
//     console.log('This is an IIFE using arrow function');
// })();

/*
An IIFEs (Immediately Invoked Function Expressions) is a js feature where the function is invoked immediately as it is initialized

IIFE: A function that is executed immediately after it is defined.
Syntax: Wrap the function expression in parentheses and immediately invoke it with another set of parentheses.
Uses: Avoiding global namespace pollution, creating a private scope, and implementing the module pattern.

It is generally used when we want to invoke a function immediately while initialized like loading of a page
*/


//todo for in & for of Loops

/*
*   Summary of Differences

?   for...in:
- Iterates over the enumerable properties of an object.
- Returns keys (property names) for objects, and indices for arrays and strings.
- Useful for iterating over object properties.

?   for...of:
- Iterates over the values of an iterable object.
- Returns values directly.
- Useful for iterating over the elements of arrays, strings, maps, sets, etc.
- Using for...of with non-iterable objects like plain objects will result in an error.


*/
//? For In Loop

// Why Use for...in Carefully
//!  The for...in loop iterates over all enumerable properties of an object, including properties inherited from the object's prototype chain. Therefore, it is often recommended to use the hasOwnProperty method to filter out inherited properties.

// Here is an extended example illustrating this:
const parentObj = {
    inheritedProperty: 'This is inherited'
};

const forInObj = Object.create(parentObj);
obj.name = 'Alice';
obj.age = 25;
obj.city = 'Wonderland';

for (const key in forInObj) {
    // console.log(`${key}: ${forInObj[key]}`);
}

/*
Output:

name: Alice
age: 25
city: Wonderland
inheritedProperty: This is inherited

*/

// In the above example, the for...in loop also iterates over the inheritedProperty from parentObj. To avoid this, use the hasOwnProperty method:

for (const key in forInObj) {
    if (forInObj.hasOwnProperty(key)) {
        // console.log(`${key}: ${forInObj[key]}`);
    }
}

/*
Output(filtered):

name: Alice
age: 25
city: Wonderland

*/
//? For Of Loop

const forOfObj = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
};

for (const key of Object.keys(obj)) {
    // console.log(`${key}: ${obj[key]}`);
}

for (const [key, value] of Object.entries(forOfObj)) {
    // console.log(`${key}: ${value}`);
}