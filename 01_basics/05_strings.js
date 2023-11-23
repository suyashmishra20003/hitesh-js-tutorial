const name = "Suyash";
const repoCount = 50;

// console.log(name + " " + repoCount); //!Outdated Syntax

//? String Interpolation (Modern Approach)
// console.log(`My name is ${name} and my repo count is ${repoCount} `  );

const gameName = new String('suyaShMishra')  // Gives a String Object
// gameName.map((item)=>{console.log(item);}) //! This gives a type error beacuse game name is a string object it does not support array functions
//? To convert string object to a array
// const strArr = Array.from(gameName)
// strArr.map((item)=>{console.log(item);})
// console.log(gameName); // String object key

//console.log(gameName.__proto__); //? To access Prototype

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); 
// console.log(gameName.indexOf('a')); 


const newStr = gameName.substring(0,4)
// console.log(newStr);

const sliceStr = gameName.slice(-8,7)
// console.log(sliceStr);

const newStrOne = "      suyash      ";
// console.log(newStrOne.trim());

const url = 'sm@gmail.com'
 
console.log(url.replace('gmail','cavisson'));

// console.log(url.split('',4));
// console.log(url.split(''));