let myName = 'Suyash     '
// console.log(myName.trim().length);

let myHeros = ['loki', 'thor', 'nagraj']

let heropower = {
    thor: 'hammer',
    spiderman: 'web',

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.suyash = function () {
    console.log('Suyash is present in all objects');
}

// heropower.suyash()

//* suyash() function is present in any Object which is initialized 
//* suyash() is injected in Object that means it is available in any non primitive data type
//* Because all non primitive data types are ultimately an Object

// console.log(heropower);
// console.log({age:22});

// console.log({name:'Shikhar'});

// myHeros.suyash()

Array.prototype.sayHello = function () {
    console.log('Hello !! Suyash is present in all Arrays');
}

// myHeros.sayHello()
// heropower.sayHello() //! This gives an error because array comes below the heirarchy of Object

const User = function (name, email) {
    this.name = name
    this.email = email
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    make: 'Js Assignent',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// console.log(TASupport.isAvailable); //? This give true


//* Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
// console.log('+++++++');
// console.log(TeachingSupport.makeVideo);

const anotherUser = 'SuyashMishra     '

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

anotherUser.trueLength()

//* Use of prototype property
//todo      prototype property is used to share methods and properties between object instances

/*
* Prototypal Inheritance:

todo       Prototypal inheritance is a fundamental feature of JavaScript that allows objects to inherit properties and methods from other objects.
todo       Every JavaScript object has a prototype object, which acts as a template for the object. This prototype object contains properties and methods that are shared among all instances of that object type.
todo       When a property or method is accessed on an object, JavaScript first checks if the object itself has that property or method. If not, it looks up the prototype chain to find it in the prototype object.
todo       This mechanism allows for the creation of hierarchical relationships between objects, where objects inherit properties and methods from their prototype object.
*/