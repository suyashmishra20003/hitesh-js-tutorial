//* Immediately Invoked Function Expressions (IIFE)

//todo   To avoid the pollution of the global scope varibles inside or functions we need to use an IFFE
//todo   ()() ,, Here the first parenthesis is the definition of the function and the second parenthesis is the execution of a function
//? How To write an Iffe

(function chai(params) {
    //? Named IFFe
    console.log('DB Connected')
})();
//? Here the function immediately fires even without using  chai()
//! If we do not use ; after an iffe the function does not know when to stop the execution of the function and will give an ERROR so using ; to stop the execution of a function

( ()=>{
    //? anonymus IFFE
    console.log('DB Connected two');
} )();

//* How to send a varible inside an iffe
( (name)=>{
    console.log(`DB is Connected by ${name}`);
} )('Shikhar')

