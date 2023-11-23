//* for of loop
const arr = [1,2,3,4,5,67,53,46];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Suyash Mishra"
for (const greet of greetings) {
    if(greet == ' '){
        continue;
    }
    // console.log(greet);
}

//* Maps
/*

?        Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.
?        A Map does not contain any keys by default. It only contains what is explicitly put into it.	
?        Objects vs. Maps
?        Object is similar to Map—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. 
?        A Map's keys can be any value (including functions, objects, or any primitive).	
?        The keys of an Object must be either a String or a Symbol.
?        The number of items in a Map is easily retrieved from its size property.	
?        Determining the number of items in an Object is more roundabout and less efficient. A common way to do it is through the length of the array returned from Object.keys().

*/

//*     Map is not directly iteratable we need a roundabout to do it

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('UK', 'United Kingdom')
map.set('IN', 'India')

console.log(map);

for (const [key,value] of map) {

    // console.log(key, ':-' , value);
}

const obj = {
    name:'Suyash',
    age:38
}

// for (const [key,value] of obj) {
//     console.log(key, ':-' , value);
//!     This gives an error we can't iterate a object by forof loop   
// }