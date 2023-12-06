//* What is Object Literal ?
//? it means literally making an object

const user = {
    username:'Suyash',
    loginCount:8,
    signedIn: true,

    getUserDetails: function (){
        console.log(`My Name is ${this.username} `);
        console.log(this);
    }
    // getUserDetails:  () => {
        // ! This gives undefiend (using arrow function geives undefined but using simple function does not give undefined)
        // console.log(`My Name is ${this.username} `);
    // }
}
let copy = JSON.parse(JSON.stringify(user))
console.log('COPY => ' , copy);

//* To make deep copy of an Object (This deep copies upto a certain degree for deeply nested objects it fails !!)
//* To Deep copy use _lodash or JSON.parse(JSON.stringify(object))
const user2 = {...user}

// console.log(user.getUserDetails());

console.log(user2);

//*  On logging this globally gives window object which is only shown in browser
//?       console.log(this)


//! ----------------------------------------------------------

//*  new keyword is a constructor function. it is used to make multiple instances of an object without defining a Object literal again and again.

//! ----------------------------------------------------------

//* Another way to make new instances of an Object literal

function User(username, logincount, isLoggedIn) {
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;

    // return this //? This is implicity defined
}

// const userFunc = User('Shikhar',21, true)
//! This is a bad way to create instance of an object
// console.log(userFunc);

//? So use new keyword to avoid

const userOne = new User('Shikhar' , 21 , true)
// console.log(userOne);

//! ----------------------------------------------------------
//* PROTOTYPE EXAMPLE
//todo      Constructor function
function Mobile(name,price) {
    this.name = name
    this.price = price
}

//todo      Adding a method to the prototye
Mobile.prototype.getDetails  = function () {
    console.log(`The Mobile name is ${this.name} and it's price is ${this.price}`);
}

//todo      Creating instances of the Mobile object
const mobile1 = new Mobile('Nokia',3000)
// const mobile2 =  Mobile('Motorola',17000) //!  This gives an error becuse new keyword is not 
const mobile2 = new Mobile('Motorola',17000)

//todo      Accessing properties
console.log(mobile1.name); // Nokia
console.log(mobile2.price);  // 17000

//todo      Calling the method from the prototype
mobile2.getDetails()


/*

There are several ways to deep copy nested objects in JavaScript, each with its own advantages and drawbacks. 
Here are some of the most common methods:

*       1. Using JSON.parse(JSON.stringify(object))

        This is a simple and efficient way to deep copy any type of object, including nested objects and arrays. 
        It works by converting the object to a JSON string and then parsing it back into a JavaScript object. 
        This method is guaranteed to create a deep copy, but it can be inefficient for very large objects.

?               const originalObject = {
?               a: 1,
?               b: {
?                   c: 2,
?                   d: [3, 4],
?               },
?               };

todo            const copiedObject = JSON.parse(JSON.stringify(originalObject));

console.log(copiedObject === originalObject); // false
console.log(copiedObject.b === originalObject.b); // false

*       2. Using spread operator (... )

Introduced in ES6, the spread operator can be used to create a shallow copy of an object. 
However, similar to Object.assign, it only copies the first level of properties. 
You can achieve a deep copy by nesting the spread operator within another object constructor.

JavaScript
?       const originalObject = {
?         a: 1,
?         b: {
?           c: 2,
?           d: [3, 4],
?         },
?       };

todo        const copiedObject = {...originalObject, b: {...originalObject.b}};

console.log(copiedObject === originalObject); // false
console.log(copiedObject.b === originalObject.b); // false

*       3. Using libraries

Several libraries can simplify deep copying nested objects, such as lodash and ramda. 
These libraries often provide methods that are more efficient and versatile than the built-in methods in JavaScript.

JavaScript
// Using lodash
?        const _ = require('lodash');

?        const originalObject = {
?        a: 1,
?        b: {
?            c: 2,
?            d: [3, 4],
?        },
?        };

todo    const copiedObject = _.cloneDeep(originalObject);

console.log(copiedObject === originalObject); // false
console.log(copiedObject.b === originalObject.b); // false
Use code with caution. Learn more
*       The best method for deep copying nested objects depends on your specific needs and preferences. 
*       If you are working with simple objects, the JSON.parse(JSON.stringify(object)) method is a good choice. 
*       If you need to deep copy more complex objects or frequently perform deep copies, 
*       you may want to consider using a library or a more robust recursive function.




*/