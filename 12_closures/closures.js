
/*
*         Lexical Scoping
todo      If there is a function inside the function the inner function will have access to all the variables of the outer function
todo      But the Outer function will not have the acces of the variables of the inner function
*/

// function init() {
//     let name = "Mozilla"; //* name is a local variable created by init
//     function displayName() {
//         //* displayName() is the inner function, that forms the closure
//         cosole.log(name); //* use variable declared in the parent function
//     }
//     displayName();
// }
// init();

// function outer() {
//     let username = "hitesh"
//     console.log("OUTER", secret);
//     function inner() {
//         let secret = "my123"
//         console.log("inner", username);
//     }
//     function innerTwo() {
//         console.log("innerTwo", username);
//         console.log(secret); //! this gives error 
//     }
//     inner()
//     innerTwo()

// }
// outer()
// console.log("TOO OUTER", username);

/*  
todo        At first glance, it might seem unintuitive that this code still works. 
todo        In some programming languages, the local variables within a function exist for just the duration of that function's execution. 
todo        Once makeFunc() finishes executing, you might expect that the name variable would no longer be accessible. 
todo        However, because the code still works as expected, this is obviously not the case in JavaScript.
todo        The reason is that functions in JavaScript form closures. 
todo        A closure is the combination of a function and the lexical environment within which that function was declared. 
todo        This environment consists of any local variables that were in-scope at the time the closure was created. 
todo        In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. 
todo        The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. 
todo        For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to console.log. 

*           all memory is shared (total Lexical scope is shared)

*/


//* Closure Example
// function makeFunc() {
//     const name = "Mozilla";
//     let age = 'suyash'
//     function displayName() {
//         console.log(age);
//     }
//     return displayName;  //* Here the entire inner function is returned
// //*     Here not only the innner function but also its scope( Lexical Scope ) of parent is also returned
// }

const myFunc = makeFunc();
myFunc();

