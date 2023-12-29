//*     To iterate an object we use for in loop
//*     if we use for in loop on an array it gives keys(indexs) of an array 
const myObject = {
    js:'JavaScript',
    cpp:'C++',
    rb:'Ruby',
    swift:'swift by Apple',
}

for (const key in myObject) {
    console.log(`Key is ${key} and it's value is ${myObject[key]}`);
}

const arr2 = Array.from(Object.keys(myObject))
console.log(arr2);

const arr = [1,2,3,34,,5,6,7,4]

for (const key in arr) {
    // console.log(key); //todo    As array is also an object it's keys are stored in number which are also indexs  like this :-  0:1,3:34
    console.log(arr[key]);
}