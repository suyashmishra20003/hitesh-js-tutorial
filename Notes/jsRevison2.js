//todo    Prototypal Inheritance

/*
Prototypal Inheritance in JavaScript
Prototypal inheritance is a feature in JavaScript that allows objects to inherit properties and methods from other objects. This inheritance is facilitated through the prototype chain.

Key Concepts

Prototype:

Every JavaScript object has a prototype. The prototype is also an object.
An object inherits properties and methods from its prototype.
Prototype Chain:

When trying to access a property or method, JavaScript will first look at the object itself. If not found, it will look at the object's prototype, and so on up the prototype chain until it reaches Object.prototype.
*/

class Person {
    constructor(name, isHuman) {
        this.name = name;
        this.isHuman = isHuman;
    }

    printIntroduction() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
}

class Hero extends Person {
    constructor(name, isHuman, power) {
        super(name, isHuman);
        this.power = power;
    }

    displayPower() {
        console.log(`${this.name}'s power is ${this.power}`);
    }
}

let me = new Hero('Suyash', true, 'Invisibility');
// me.printIntroduction(); // Output: My name is Suyash. Am I human? true
// me.displayPower(); // Output: Suyash's power is Invisibility

/*
Prototypal Inheritance: Allows objects to inherit properties and methods from other objects.
Prototype Chain: The mechanism by which inheritance is facilitated.
Extending Built-in Prototypes: Possible but not recommended.
Class Syntax: A clearer and more concise way to handle inheritance, using prototypes behind the scenes.
*/



const obj = {
    name: 'Suyash',
    age: 25
};

const newObj = Object.create(obj);

// console.log(newObj)

//todo    `new` Keyword

/*
The new keyword in JavaScript is used to create an instance of a user-defined object type or one of the built-in object types that has a constructor function. When new is used, it performs several steps to create and initialize the object.

? Purpose of new Keyword:
- Creates a New Object: The new keyword creates a new empty object.
- Sets Prototype: It sets the prototype of the new object to the prototype of the constructor function.
- Binds this: It binds this to the newly created object within the constructor function.
- Returns the Object: It returns the newly created object, unless the constructor function returns a non-primitive value (an object).

? Usage:
The new keyword is particularly useful when you want to create multiple instances of an object type, each with its own set of properties and methods.

? Example Using a Constructor Function:
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log('Hi person');
    };
}

let user = new Person('Suyash', 28);
console.log(user); // Output: Person { name: 'Suyash', age: 28, greet: [Function] }
user.greet(); // Output: Hi person

? Example Using ES6 Class Syntax:
class ClassPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hi person');
    }
}

let user = new ClassPerson('Suyash', 28);
console.log(user); // Output: ClassPerson { name: 'Suyash', age: 28 }
user.greet(); // Output: Hi person

*/


//todo Immutability in JavaScript

let str = 'Suyash';
let newStr = str.replace('Suyash', 'John');
// console.log(str); // Output: 'Suyash' (original string remains unchanged)
// console.log(newStr); // Output: 'John' (new string)

/*
Immutability in JavaScript refers to the inability to change an object or value after it has been created. This concept is often used to ensure that data does not change unexpectedly, which can help avoid bugs and make code easier to reason about.

Strings are also immutable. Any operation that seems to modify a string actually creates a new string.

- Immutability means that once a value is created, it cannot be changed.
- Primitive data types (numbers, booleans, etc.) are inherently immutable.
- Strings are immutable, but objects and arrays are mutable by default.
- Immutability can be enforced using methods like Object.freeze or libraries like Immutable.js.
*/

//todo   Service worker

/*
Service workers are powerful tools that enable background tasks, offline support, and network request interception in web applications. By caching assets and intercepting network requests, they can significantly improve the performance and reliability of web applications.

? Key Features of Service Workers:
- Background Tasks: They can handle background tasks like sync and push notifications without blocking the main thread.
- Offline Support: By intercepting network requests, service workers can serve cached assets, making web applications work offline or on slow networks.
- Network Interception: They can intercept network requests and decide whether to serve a cached response or fetch from the network.
*/

//todo   Debouncing

/*
Debouncing ensures that a function is not called multiple times in quick succession. This simple example demonstrates how to debounce a button click event, preventing the function from being called too frequently.

?   Use Cases for Debouncing:
- Search Input Fields: Avoid making API calls on every keystroke.
- Window Resize Events: Prevent functions from being called multiple times during window resizing.
- Scroll Events: Optimize performance by reducing the number of times a scroll event handler is called.
- Form Validation: Delay validation until the user has finished typing.

?   Simple Debouncing Example:
Consider a button that, when clicked, triggers a function. Without debouncing, if the user clicks the button multiple times quickly, the function will be called multiple times. With debouncing, the function will only be called once after the user has stopped clicking for a specified period.

*   HTML:
<button id="debounceButton">Click Me</button>

*   JavaScript:
?   Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

?   Function to be debounced
function handleClick() {
    console.log('Button clicked!');
}

?   Debounced version of handleClick with a 500ms delay
const debouncedHandleClick = debounce(handleClick, 500);

?   Event listener for the button
const button = document.getElementById('debounceButton');
button.addEventListener('click', debouncedHandleClick);

?   Explanation:
- Debounce Function: The debounce function takes a function (func) and a delay in milliseconds (delay). It returns a new function that waits for the specified delay before calling the original function. If the returned function is called again before the delay, it resets the timer.
- HandleClick Function: handleClick is a simple function that logs 'Button clicked!' to the console.
- Debounced Version: debouncedHandleClick is the debounced version of handleClick with a 500ms delay.
- Event Listener: An event listener is added to the button. When the button is clicked, debouncedHandleClick is called.

?   How It Works:
When you click the button, debouncedHandleClick is triggered.
If you click the button multiple times quickly, only the last click (after 500ms of no clicks) will trigger handleClick.


*/


//todo  Promise.all Method in JavaScript

/*
The Promise.all method is used to handle multiple promises concurrently. It takes an iterable (usually an array) of promises and returns a single promise that resolves when all the promises in the iterable have resolved. If any of the promises in the iterable reject, the returned promise immediately rejects with the reason of the first promise that rejected.

?   Key Points:
-   Concurrent Execution: Promise.all allows you to execute multiple asynchronous operations concurrently.
-   Single Resolution: The promise returned by Promise.all resolves when all the input promises have resolved.
-   Single Rejection: The promise returned by Promise.all rejects if any of the input promises reject.
*/
const promise1 = new Promise((resolve) => setTimeout(() => resolve('First Promise Resolved'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second Promise Resolved'), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Third Promise Resolved'), 3000));

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        // console.log(results); // ["First Promise Resolved", "Second Promise Resolved", "Third Promise Resolved"]
    })
    .catch((error) => {
        // console.error(error); // If any promise rejects, this will log the error.
    });


//todo  difference between Object.freeze and Object.seal

let objFreeze = {
    name: 'suyash'
};

Object.freeze(objFreeze);

objFreeze.age = 28; // This will not work
objFreeze.name = 'shikhar'; // This will not work

// console.log(objFreeze); // Output: { name: 'suyash' }

let objSeal = {
    name: 'suyash'
};

Object.seal(objSeal);

objSeal.age = 28; // This will not work
objSeal.name = 'shikhar'; // This will work

// console.log(objSeal); // Output: { name: 'shikhar' }

//todo JS Proxy

/*
So a proxy is nothing but a mediator that speaks or operates on behalf of the given party.

?   In JavaScript, there is a special object called a Proxy. It helps you create another object on behalf of the original object.
This new proxy object will act as a mediator between the real world and the original object. In this way, we will have more control over the interaction with the original object.

?   Syntax

new Proxy(<object>, <handler>)

The Proxy takes two parameters:
- <object>: The object that needs to be proxied.
- <handler>: An object that defines the list of methods that can be intercepted. These are also called traps.

?   Use Cases for Proxies
- Validation: Proxies can enforce validation rules on property values.
- Value Correction: Proxies can automatically correct or transform property values.
- Property Access Control: Proxies can control access to properties and methods, making certain properties read-only or hiding them.
- Logging and Debugging: Proxies can log operations performed on an object for debugging purposes.
- Default Values: Proxies can provide default values for non-existent properties.



*/

// Target object
let person = {
    name: 'John Doe',
    age: 30
  };
  
  // Handler with traps
  let handler = {
    get: function(target, property) {
        // console.log(target,property,'get PArt');
        return property in target ? target[property] : 'Not in Object';
    //   if (property in target) {
    //     return target[property];
    //   } else {
    //     return `Property "${property}" not found.`;
    //   }
    },
    set: function(target, property, value) {

      if (property === 'age' && (typeof value !== 'number' || value <= 0)) {
        console.log('Invalid age value');
      } else {
        target[property] = value;
        return true;
      }
    }
  };
  
  // Create a proxy
  let proxyPerson = new Proxy(person, handler);
  
//   console.log(proxyPerson.name); // Output: John Doe
//   console.log(proxyPerson.age); // Output: 30
//   console.log(proxyPerson.gender); // Output: Property "gender" not found.
  
//   proxyPerson.suyash = 35;
//   console.log(proxyPerson.age); // Output: 35

//   proxyPerson.age = -5; // Output: Invalid age value
//   console.log(proxyPerson.age); // Output: 35
  

const test = {
    subject:'Maths',
    questions:20,
    marks:10,
    units:['Trignometry','Algebra','Geometry','Statistics'],
    printDetails(){
        console.log(this);
    }
}

const testProxy = new Proxy(test, {
    get(target, property) {
        return property in target ? target[property] : 'Not in Object';
    },
    set(target, property, value) {
        if(property in target){
            return target[property] = value;
        }
    }
})

// console.log(testProxy.units.map((item)=>{
//     return item + 'subject'
// }));

// testProxy.printDetails();



const arr = ['Trignometry','Algebra','Geometry','Statistics'];

// const res = arr.slice(0,3);

const res = arr.splice(0,3,'Electrical Enginering', 'Mechanical Enginering');
// console.log(arr);
// console.log(res);


/*
There are 4 methods to create an object
1. Using constructor function
function User(name,age,marks,password) {
    this.name = name;
    this.age = age;
    this.marks = marks;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}def`
}

const user1 = new User('suyash',25,100,'1234');
console.log(user1.encryptPassword());
console.log(user1);




2. Using class syntax
class User {
    constructor(name,age,marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    User.prototype.encryptPassword = function () {
        return `${this.password}def`
    }
}

const user1 = new User('suyash',25,100,'1234');
console.log(user1.encryptPassword());
console.log(user1);

class syntax is using the constructor function to create an object behind the scenes but nowadays we use class syntax because it is mores easily redable

3. Using object literal
const user = {
    name: 'suyash',
    age: 25,
    marks: 100
}

4. Using Object.create
const user = {
    name: 'suyash',
    age: 25,
    marks: 100
}

const user1 = Object.create(user);
user1.school = 'IPS'
user1.standard = '10th'
console.log(user);//{ name: 'suyash', age: 25, marks: 100 }
console.log(user1.age); // 25

though user1 does not have age property it has access to its prototype assignd to Object.create(), So it will check the prototypal cahin and get the age property
*/


