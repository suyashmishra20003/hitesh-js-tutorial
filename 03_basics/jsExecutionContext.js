/*

*       Javascript is dynamically typed, single threaded asynchronous language  

*        Dynamically Typed:
?        Variables in JavaScript can hold values of any type, and their types can change during the execution of the program.
todo        let x = 5;       // x is a number
todo        x = 'Hello';     // x is now a string

*        Single-Threaded:
?        JavaScript is typically single-threaded. This means it has one call stack and one memory heap. 
?        This is because JavaScript was designed to be lightweight and to run in a browser environment 
?        where you want to avoid blocking operations.

*        Asynchronous:
?        JavaScript uses an event loop to handle asynchronous operations. 
?        This allows non-blocking execution and is crucial for dealing with tasks like handling user interactions, 
?        making network requests, and handling timers.

*        Concurrency Model:
?        While JavaScript is single-threaded, the browser environment provides additional concurrency 
?        through mechanisms like Web Workers. Web Workers enable parallel processing by running code in the background,
?        allowing tasks to be performed concurrently.

*                JS EXECUTION CONTEXT (EC)
?         Types of EC : -
todo      1) Global Execution Context (GEC)
todo      2) Functional Execution Context (FEC)
todo      3) Eval Execution Context (EEC)

todo        At first GEC Runs. It runs in two phases
todo               a) Memory Creation Phase
todo               b) Execution Phase

*    The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. 
*    A function execution context is created whenever a function is called, representing the function's local scope.
*    here are two phases of JavaScript execution context:

 ?   Creation phase: In this phase, the JavaScript engine creates the execution context and sets up the script's environment. 
 ?   It determines the values of variables and functions and sets up the scope chain for the execution context.
 ?   Execution phase: In this phase, the JavaScript engine executes the code in the execution context. 
 ?   It processes any statements or expressions in the script and evaluates any function calls. 

*/


var n = 5;

function square(n) {
    var ans = n * n;
    return ans;
}

var square1 = square(n);
var square2 = square(8);

console.log(square1)
console.log(square2)

/*
?          Creation Phase
 
?   At the very beginning, the JavaScript engine executes the entire source code, creates a global execution context, and then does the following things:

?   1) Creates a global object that is window in the browser and global in NodeJs.
?   2) Sets up a memory for storing variables and functions.
?   3) Stores the variables with values as undefined and function references.
?   EC for above code

*       Creation Phase in Execution Context

todo    n      :undefined
todo    square : {...}
todo    square1: undefined
todo    square2: undefined

? After this creation phase, the execution context will move to the code execution phase.

*       Execution Phase
?       Now, in this phase, it starts going through the entire code line by line from top to bottom. 
?       As soon as it encounters n = 5, it assigns the value 5 to 'n' in memory. Until now, the value of 'n' was undefined by default.
?       Then we get to the 'square' function. As the function has been allocated in memory, it directly jumps into the line var square1 = square(n);. 
?       square() will be invoked and JavaScript once again will create a new function execution context.

?       Once the calculation is done, it assigns the value of square in the 'ans' variable that was undefined before. 
?       The function will return the value, and the function execution context will be destroyed.
?       The returned value from square() will be assigned on square1. This happens for square2 also. 
?       Once the entire code execution is done completely, the global context will look like this and it will be destroyed also.

todo    n      : 5
todo    square : {...}
todo    square1: 25
todo    square2: 64

*/

/*

*       What is the Call Stack? //! (Last-In-First-Out)
?       To keep the track of all the contexts, including global and functional, the JavaScript engine uses a call stack. 
?       A call stack is also known as an 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.
?       It uses the LIFO principle (Last-In-First-Out). When the engine first starts executing the script, it creates a global context and pushes it on the stack. 
?       Whenever a function is invoked, similarly, the JS engine creates a function stack context for the function and pushes it to the top of the call stack and starts executing it.

?       When execution of the current function is complete, then the JavaScript engine will automatically remove the context from the call stack and it goes back to its parent.
?       The call stack has its own fixed size depending on the system or browser. If the number of contexts exceeds the limit, then a stack overflow error will occur. 
?       This happens with a recursive function that has no base condition.


*/

//*      Let's see the following example:

function funcA(m,n) {
    return m * n;
}

function funcB(m,n) {
    return funcA(m,n);
}

function getResult(num1, num2) {
    return funcB(num1, num2)
}

var res = getResult(5,6);

console.log(res); // 30
/*
todo    In this example, the JS engine creates a global execution context that enters the creation phase.
todo    First it allocates memory for funcA, funcB, the getResult function, and the res variable. 
todo    Then it invokes getResult(), which will be pushed on the call stack.
todo    Then getResult() will call funcB(). At this point, funcB's context will be stored on the top of the stack. 
todo    Then it will start executing and call another function funcA(). Similarly, funcA's context will be pushed.  
*/

/*
*    Whenever the function is executed a new execution context is executed
?    ==>  new variable environment + Execution thread
*/