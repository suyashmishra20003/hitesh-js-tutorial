//* What is Object Literal ?
//? it means literally making an object

const user = {
    username:'Suyash',
    loginCount:8,
    signedIn: true,

    // getUserDetails: function (){
    //     console.log(`My Name is ${this.username} `);
    //     console.log(this);
    // }
    getUserDetails:  () => {
        // ! This gives undefiend (using arrow function geives undefined but using simple function does not give undefined)
        console.log(`My Name is ${this.username} `);
    }
}

//* To make deep copy of an Object
const user2 = {...user}

// console.log(user.getUserDetails());

// console.log(user2);

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


