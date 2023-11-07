const  user = {
    name: 'Suyash',
    price:999,
    
    welcomeMessage: function (params) {
        // console.log(this); //* Prints current Context
        // console.log(`Hello ${name}, Welcome to website `); //* This gives an error because though it is inside the object if we want to use another key inside a key function we have to use this to get the key in current context
        console.log(`Hello ${this.name}, Welcome to website `);
    }
}

console.log(user.welcomeMessage());

user.name = 'Shikhar'

console.log(user.welcomeMessage());

// console.log(this); //? Prints Global Object  which is window object

//* On printing this in the browser (devtools) it gives global object but on printing this inside a node environment 

// function chai(){
//     let username = 'PAPA'
//     // console.log(this.username);
    //* Above code gives undefined because we cannot use this inside function.
    //* username variable inside chai function gives undefined because the variable inside the function scope does not need this keyword to access them 
// }

//! -----------------------------------------------------------

// const chai  = function (params) {
//     let user  = 'mummy';
//     console.log(this.user);
// }
// chai()
//todo This also gives undefined 


//! -----------------------------------------------------------
//* Using the arrow function

const chai = ()=>{
    let user = 'Arun'
    console.log(this.user);
}
// chai()

//todo This also gives undefined

//! -----------------------------------------------------------

//? SYNTAXES OF ARROW FUNCTION

//* syntax 1
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

//* syntax 2
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(9,3));
//? This type of syntax of arrow funtion is implicit return arrow funtion. In this, if a function have a return value of a single line we can use this type of syntax

//* syntax 3
// const addTwo = num1 => num1 
// console.log(addTwo(9));
//? If parameter is also sinlgle and the return statement is also of a single line we can use this syntax

//* syntax 4
// const addTwo = (num1,num2) => (
    // let diff = 3  //! This will give an error because inside parenthesis we can only write single line statement
    // num1 + num2
// ) 
// console.log(addTwo(8,8));
//? If we use curly braces {} we have to use return keyword but if we use paranthesis () no need to write a return keyword

//* syntax 5 ( If we want to return a object using parenthesis)
const addTwo = () => ( 
    {
        user:'suyash',
        height:5.9
    } 
)
console.log(addTwo());

//* Implicit return 
//? meaning no need to use return keyword in a function

//* Expilict return 
//? meaning we have to use return keyword in a function