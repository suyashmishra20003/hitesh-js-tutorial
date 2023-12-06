const coding = ['js','ruby','python','java','cpp'];

const values = coding.forEach(
    (item, index, arr)=>{
        // console.log(item,index,arr );
        // console.log(item);
    }
)
// console.log(values); //! For each loop returns undefined value it only calls a function on each item of array 

const myNums = [1,2,3,4,5,6,7,8,9,10]


/*
*        MAP function
?        map() creates a new array from calling a function for every array element.
?        map() does not execute the function for empty elements.
?        map() does not change the original array.

*        SYNTAX
*        array.map(function(currentValue, index, arr))

*        currentValue	Required.
?        The value of the current element.
*        index	Optional.
?        The index of the current element.
*        arr	Optional.
?        The array of the current element.
*/

const chainedArr = myNums.map(
    (item)=>{
        return item + 10
    }
).map(
    (item) => {
        return item - 5
    }
).filter(
    (item) => {
        return item % 5 === 0 
    }
).reduce(
    (accumulator, currentValue)=>{
        return accumulator +  currentValue 
    }
)


// console.log(chainedArr); //? 25

/*   
*    FILTER function
?    The filter() method creates a new array filled with elements that pass a test provided by a function.
?    The filter() method does not execute the function for empty elements.
?    The filter() method does not change the original array.

*        SYNTAX
*        array.map(function(currentValue, index, arr))

*        currentValue	Required.
?        The value of the current element.
*        index	Optional.
?        The index of the current element.
*        arr	Optional.
?        The array of the current element.

*/

const filterArr = myNums.filter(
    (item)=>{
        return item > 4
    }
)

// console.log(" Filtered Array ",  filterArr);


/*   
*    REDUCE function
?    The reduce() method executes a reducer function for array element.
?    The reduce() method returns a single value: the function's accumulated result.
?    The reduce() method does not execute the function for empty array elements.
?    The reduce() method does not change the original array.

*        SYNTAX
*        array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

*        total	Required.
?        The initialValue, or the previously returned value of the function.
*        currentValue	Required.
?        The value of the current element.
*        currentIndex	Optional.
?        The index of the current element.
*        arr	Optional.
?        The array of the current element.
*        initialValue	Optional.
?        A value to be passed to the function as the initial value.

*/

const reducedArr = myNums.reduce(
    (accumulator,currentValue) => {
        // console.log(` acc : ${accumulator} and currentval: ${currentValue} `);
        return accumulator + currentValue
    }
)
// console.log(reducedArr);
//* All methods map reduce filter can be chained 



//! -----------------------------------------------------------
const myCoding = [
    { language:'javascript',shorthand:'js' , id:2 },
    { language:'ruby',shorthand:'rb'  , id:3  },
    { language:'python',shorthand:'py'  , id:1  },
    { language:'java',shorthand:'java'  , id:4  },
    { language:'cpp',shorthand:'c'  , id:5  },
    { language:'css',shorthand:'css'  , id:6  },
    { language:'scss',shorthand:'scss'  , id:7  },
    { language:'html',shorthand:'html'  , id:8  },
    { language:'typescript',shorthand:'ts'  , id:9  },
    { language:'jar',shorthand:'jar'  , id:10 },
]

const filteredMyCoding = myCoding.filter(
    (item)=>{
        // return item.id % 2 === 0
        return item.language[0]  === 'j' || item.language[0]  === 'c'
    }
).map(
    (item)=>{
        return item.shorthand + ' File ' 
    }
).reduce(
    (acc,crr)=>{
        return acc + crr
    }, 'Added String ===> '
)

// console.log(filteredMyCoding);

const randomNums = [22,34,6,7,9,3,2,5,7,11,78];

const result = randomNums.map((item)=>{
    return item + 3
}).filter((item)=>{
    return  item % 5 == 0
}).reduce((acc,crr)=>{
    acc = acc + crr
    return acc
})

console.log(result);