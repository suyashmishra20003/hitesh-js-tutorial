//? global scope
var c = 300

if (true) {
    //? Block Scope
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a);
// console.log(b);
//! Here a and b will give an refrence error but beacause c is a var it has global scope which is not recommended
// console.log(c);

/*
todo    scopes in the code running in browser (Developer tools) is different then the scopes running in the node code environment 
*/

//? NESTED SCOPES

function one(params) {
    const username = 'Suyash'

    function two(){
        const website = 'youtube'
        console.log(username);
    }
    // console.log(website); //! This will give an error and line 28 will not execute
//? Here two() can access username because child can access any variable of parent but parent cannot access variables of a child
    two()
}

// one()

if(true){
    const username = 'Shikhar '
    if (true) {
        const college = 'JLU'
        console.log(username + college);  
    }

    // console.log(college); //! error due to college is inside the scope of child which the parent cannnot access
}

// console.log(username); //! error due to username is inside the scope of child which the parent cannnot access


//* ********************* BASIC OF HOISTING *********************

//todo    Here addOne is only a  function so it can be accessed before initialization 

console.log(addOne());
function addOne(params) {
    return params + 1
}

//todo    Here addTwo is a function inside a variable so it cannot be accessed before initialization this gives an Reference error
// console.log(addTwo());
const addTwo = function (params) {
    return params + 2
}