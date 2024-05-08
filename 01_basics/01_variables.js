const accountId = 18347; //cannot be changed
let accountEmail = "sm@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi";
let accountState;

// accountId = 2; //!  not allowed 
accountEmail = "sm@fb.com";
accountPassword = "0293";
accountCity = "Mumbai";

//todo  Prefer not o use var because of issue in block scope and functional scope



console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity , accountState]  );

/*
Here are some guidelines for when to use each keyword:

Use let when you need to declare a variable that will be reassigned within its scope.
Use const when you need to declare a variable that will not be reassigned. 
This includes constant values, such as mathematical constants or enumerated values.
Avoid using var. If you need to declare a variable that has function scope or global scope, use let instead.

The main differences between var, let, and const in JavaScript are:

?Keyword	   Scope	               Reassignment	  Initialization
! var	       Functional or global	   Allowed	      Not required
! let	       Block	               Allowed	      Not required, but recommended
! const	       Block	               Not allowed	  Required
Here is a table that explains each of these differences in more detail:

? Scope

*The scope of a variable refers to the part of the code where it can be accessed.

var variables have function scope or global scope. 
This means that they can be accessed anywhere within the function in which they are declared, 
or anywhere in the program if they are declared outside of a function.
let and const variables have block scope. 
This means that they can only be accessed within the block of code in which they are declared. 
A block of code is a set of statements enclosed in curly braces ({}).

? Reassignment

*Whether or not a variable can be reassigned refers to whether or not its value can be changed after it is initialized.

var variables can be reassigned anywhere within their scope.
let variables can be reassigned within their scope, but they cannot be redeclared.
const variables cannot be reassigned or redeclared.

? Initialization

*Initialization refers to the process of assigning a value to a variable.

var variables do not need to be initialized when they are declared. 
If a var variable is not initialized, its value will be undefined.
let variables do not need to be initialized when they are declared, 
but it is recommended to do so. If a let variable is not initialized, it will throw a ReferenceError.
const variables must be initialized when they are declared. If a const variable is not initialized, 
it will throw a SyntaxError.

? Hoisting

*Hoisting is a JavaScript mechanism that moves all variable declarations to the top of their scope. 
*This means that variables can be used before they are declared.

var variables are hoisted to the top of their function scope or global scope.
let and const variables are hoisted to the top of their block scope, but they are not initialized. 
This means that using a let or const variable before it is initialized will throw a ReferenceError.
When to use var, let, and const

It is generally recommended to use let or const instead of var. 
This is because let and const variables have block scope, which makes the code more predictable and easier to debug.



JavaScript
// var
var name = "Alice";
name = "Bob";

// let
let age = 25;
age = 30;

// const
const PI = 3.14159;
PI = 3.14; // This will throw a TypeError


? Temporal dead zone (TDZ)

*The temporal dead zone (TDZ) is a period of time during which a variable declared with let is not yet initialized. 
*The TDZ begins at the start of the block in which the variable is declared and ends when the variable is initialized.

During the TDZ, accessing the variable will throw a ReferenceError. 
This is because the variable does not yet exist. 
However, hoisting still applies to let variables, so they can be accessed before they are declared, but only after the TDZ has ended.

Here is an example of the TDZ:

// Declare a variable with let
let x;

// Try to access the variable before it is initialized
console.log(x); // ReferenceError: x is not defined

// Initialize the variable
x = 10;

// Try to access the variable after it is initialized
console.log(x); // 10
The TDZ is a safety feature that helps to prevent errors.
 It ensures that variables are always initialized before they are used. 
 This makes the code more predictable and easier to debug.
*/
