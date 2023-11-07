const marvel_heros = ['Thor', 'Ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//? concat(arr)
//? Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// const all_heros =  marvel_heros.concat(dc_heros)
// console.log(all_heros);

//? spread 

const all_heros = [...marvel_heros, ...dc_heros]
// console.log('Using Sprad Operator => ', all_heros);

const crazy_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//? flat(depth)
//? Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//? @param depth — The maximum recursion depth
// const refactored_array = crazy_array.flat(2)
const refactored_array = crazy_array.flat(Infinity) //* automatically calculates depth
// console.log(refactored_array);
console.log(
    Array.isArray('Suyash')
);

let obj = {
    name:'Suyash',
    gender:'male'
}
console.log(Array.from(Object.values(obj))); //*  This syntax creates an array from object keys

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));