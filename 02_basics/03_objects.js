/* 
?   How to declare objects?
*   declare by litral and declare by constructor
*   Singleton
*   singleton always occurs when object is declared from a constructor => Object.create
*   singleton does not occur when object is declared from a Object literal
*/

Object.create  //!  creates object with constructor creates singleton
const rank = 'new_Rank'
//* Creating objects by object literals
const jsUser = {
    'full name':'Suyash',
    [rank]:'2000',
    age:25,
    location:'Delhi',
    email:'sm@gmail.com',
    isLoggedIn:false,
    lastLoginDays:['Monday','Saturday']
}
// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser['full name']);
// console.log(jsUser[rank]);

//? Changing a key

jsUser.age = 28
//! Object.freeze(jsUser)
/*
todo        Object on which to lock the attributes.
todo        Prevents the modification of existing property attributes and values, 
todo        and prevents the addition of new properties.
*/
jsUser["full name"]= 'Shikhar' //* Though it does not give an error it does not allow changes to the keys of object 

//? adding fuction to an object 
jsUser.greeting = ()=>{
    console.log('Hello World !!');
    return this.age
}

jsUser.greetingTwo = function () {
    console.log(`Hello Js user age is ${this.age}`);
}

// console.log(jsUser);
jsUser.greeting();
jsUser.greetingTwo();