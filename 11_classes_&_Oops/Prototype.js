let myName = 'Suyash     '
// console.log(myName.trim().length);

let myHeros = ['loki','thor','nagraj']

let heropower = {
    thor:'hammer',
    spiderman:'web',

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

const User = function (name,email) {
    this.name = name
    this.email = email
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable:true
}

const TASupport = {
    make:'Js Assignent',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// console.log(TASupport.isAvailable); //? This give true


//* Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)
// console.log('+++++++');
// console.log(TeachingSupport.makeVideo);

const anotherUser = 'SuyashMishra     '

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

anotherUser.trueLength()