function sayMyName(params) {
    console.log('S');
    console.log('U');
    console.log('Y');
    console.log('A');
    console.log('S');
    console.log('H');
}

// sayMyName //* Only Reference
// console.log(sayMyName()); //* Function Execution

// function addTwoNumbers(num1 , num2) { //? Here num1 and num2 are parameters
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1 , num2){
    let result = num1 + num2
    return result
}

const result = addTwoNumbers(5,3); //? Here 5 and 3 are arguments
// console.log(result)

function loginUserMessage(username = 'kush') { //todo   Default value of a function
    if (!username) {
        console.log('Please enter  a usrname');
        return
    }
    return `${username} just logged in`

    //! When you don't pass anything it will return undefined
}

// console.log(loginUserMessage());//* If no value is passed it gives default value
// console.log(loginUserMessage('Suyash')); //* If some value is passed it gives the passed value

//? If we don't to know how many values will be given in the function

function calculateCartPrice(val1,val2,...nums){ //* used REST operator to bundle all the arguments in a single array
    return nums
}

// console.log(calculateCartPrice(200,330,466,8778,323));

//? How to pass a Object into a function ?
const user = {
    username:'Shikhar',
    price:199
}

function handleObject(anyObject) {
    return `Username is ${anyObject.username} and price is ${anyObject.price}`
}
console.log(handleObject(user));

//? You can also pass arrays inside the function