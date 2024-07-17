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