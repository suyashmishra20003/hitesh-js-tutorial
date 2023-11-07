const myArr = [1 ,2 ,3 ,4 ,'suyash' , false];
/*
?    In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

todo    1) JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
    
todo    2) JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
    
todo    3) JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
    
todo    4) JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
*/

const myHeros = ['shaktiman', 'naagraj']

// const newArr = new Array(1,2,3,4)
// console.log(newArr);

//! Array Methods
// myArr.push(6)
// myArr.pop()
// myArr.unshift('shift')
// myArr.shift() //remove value\s from left 
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// const newArr = myArr.join()
// console.log(myArr);
// console.log( newArr,typeof newArr);


//? slice, splice
//? Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log('A' , myArr);
const arr1 = myArr.slice(1,3)

console.log(arr1);
console.log('B ', myArr);


//? Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. Manipulates original array

const arr2 = myArr.splice(1,3);
console.log('C ', myArr);

console.log(arr2);