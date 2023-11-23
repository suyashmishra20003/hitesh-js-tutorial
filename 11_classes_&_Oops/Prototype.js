let myName = 'Suyash     '
console.log(myName.trim().length);

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

heropower.suyash()

//* suyash() function is present in any Object which is initialized 
//* suyash() is injected in Object that means it is available in any non primitive data type
//* Because all non primitive data types is ultimately an Object

console.log(heropower);
console.log({age:22});

console.log({name:'Shikhar'});

console.log('---------------------');
myHeros.suyash()

Array.prototype.sayHello = function () {
    console.log('Hello !! Suyash is present in all Arrays');
}

myHeros.sayHello()
// heropower.sayHello() //! This gives an error because array comes below the heirarchy of Object