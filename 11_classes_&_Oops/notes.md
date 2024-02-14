# Javascript and Classes
JavaScript has a concept of classes. Classes were introduced in ECMAScript 2015 (ES6) and provide a way to create blueprints for objects. They serve as **syntactical sugar** over the existing **prototype-based inheritance in JavaScript**, making it more familiar and convenient for developers who are accustomed to class-based languages.

## OOP (Object Oriented Programming)
- collection of properties and methods 
- All function arrays and Objects (Non Primitive Data Types) are Objects

## Why use OOP

## Parts of OOP
Object Literal
- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## 4 pillars
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism



## Abstraction

Abstraction is the process of hiding the implementation details of an object and only exposing its essential features to the user. This allows the user to interact with the object without knowing how it works internally.

For example, consider a JavaScript object that represents a bank account:


```js
const bankAccount = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
  },
  withdraw(amount) {
    this.balance -= amount;
  },
};

```

Another Example is ```fetch()```  ,```toLowercase``` etc.

## Encapsulation

Encapsulation is the process of bundling data and methods together into a single unit. This helps to protect the data from being accessed or changed in inappropriate ways.

For example, consider a JavaScript object that represents a car:

```js
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log('Starting engine...');
  }

  drive() {
    console.log('Driving...');
  }

  stopEngine() {
    console.log('Stopping engine...');
  }
}
```
This class encapsulates the data and methods related to a car. The user can interact with the object by calling its ```startEngine, drive, and stopEngine``` methods, but they cannot directly access or modify the object's properties.

## Inheritance

Inheritance is the ability of an object to inherit properties and methods from another object. This allows you to create new objects that share the same features as existing objects.

For example, consider a JavaScript class that represents a truck, which inherits from the Car class:

```js
class Truck extends Car {
  constructor(make, model, year, bedSize) {
    super(make, model, year);
    this.bedSize = bedSize;
  }

  haulCargo() {
    console.log('Hauling cargo...');
  }
}
```
The Truck class inherits all of the properties and methods of the Car class, plus it adds a new property (bedSize) and a new method (haulCargo). This allows a Truck object to have all of the same features as a Car object, plus the ability to haul cargo.

## Polymorphism

Polymorphism is the ability of an object to take on many forms. This means that the same method can be called on different objects and have different results depending on the type of object it is called on.

For example, consider the JavaScript method print:

```js
function print(value) {
  if (typeof value === 'string') {
    console.log(value);
  } else if (typeof value === 'number') {
    console.log(value.toString());
  } else {
    console.log(value);
  }
}
```

The print method can be called on a string, a number, or any other object. When the print method is called on a string, it prints the string to the console. When the print method is called on a number, it prints the number to the console. And when the print method is called on any other object, it prints the object's toString() representation to the console.

## We can't use a arrow function inside an object Literal

it's true that using arrow functions as methods inside an object can lead to unexpected behavior, especially with respect to the value of this. Arrow functions do not have their own this context; instead, they inherit it from the enclosing lexical scope. When used as a method inside an object, this lexical scope might not be the object itself, leading to potential issues.

In general, when defining methods inside an object and you need to reference the object itself (via this), it's recommended to use regular functions. Regular functions in JavaScript have their own this context, and when used as methods, they automatically bind to the object on which they are called.

However, if you want to use arrow functions inside an object, you need to be aware of the scoping behavior and ensure that the lexical scope aligns with your expectations. As shown in the previous example, you can define arrow functions outside the object and then assign them to properties.

It's not a limitation per se, but rather a matter of understanding how arrow functions behave and when to use them based on your specific use case.

## Prototype in JS 
In JavaScript, the prototype is a fundamental concept related to object-oriented programming. It's part of the prototype chain, which is the mechanism by which objects in JavaScript inherit properties and methods from other objects.

Here are key points about prototypes in JavaScript, which might be relevant in an interview:

- Object Prototypes:

Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from.

- Object Creation:

Objects can be created using constructor functions or literal notation. When a new object is created, it inherits properties from its constructor's prototype.

- Constructor Functions:

Constructor functions, when used with the new keyword, are used to create objects. The prototype of the constructor function is automatically assigned as the prototype of the new object.

- prototype Property:

Constructor functions have a prototype property, which is an object. Properties and methods added to this object become part of the prototype chain for objects created with that constructor.

- Inheritance:

When you try to access a property or method on an object, JavaScript looks for it directly on the object. If it doesn't find it, it looks in the object's prototype. This process continues up the prototype chain until it finds the property or reaches the end of the chain.

- Object.create():

The Object.create() method can be used to create a new object with a specified prototype. It allows for more explicit prototype assignment.

```js
//* PROTOTYPE EXAMPLE
//      Constructor function
function Mobile(name,price) {
    this.name = name
    this.price = price
}

//      Adding a method to the prototye
Mobile.prototype.getDetails  = function () {
    console.log(`The Mobile name is ${this.name} and it's price is ${this.price}`);
}

//      Creating instances of the Mobile object
const mobile1 = new Mobile('Nokia',3000)
const mobile2 = new Mobile('Motorola',17000)

//      Accessing properties
console.log(mobile1.name); // Nokia
console.log(mobile2.price);  // 17000

//      Calling the method from the prototype
mobile2.getDetails()
```


## Here's what happens behind the scenes when the new keyword is used

- A new object is created: The new keyword initiates the creation of a new JavaScript object.

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

- The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

- The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
