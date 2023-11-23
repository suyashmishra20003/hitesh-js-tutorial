/*
*       The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
todo    instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

*       A Promise is in one of these states:
todo    pending: initial state, neither fulfilled nor rejected.
todo    fulfilled: meaning that the operation was completed successfully.
todo    rejected: meaning that the operation failed.

?        The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). 
?        When either of these options occur, the associated handlers queued up by a promise's then method are called. 
?        If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, 
?        so there is no race condition between an asynchronous operation completing and its handlers being attached.

                    let conditions=true;

*                    const proms= new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (conditions) {
todo                               resolve ("Hello")
                            } else {
todo                                reject ("This condition faild")
                            }
                        }, 2000);
                    });


todo                    proms.then((result) => {
                        console.log(result);
                    })
todo                    .catch(function(error){
                        console.log(error);
                    });

*/

const promiseOne = new Promise((resolve, reject) => {
    //todo       Do an async task             
    //todo       DB calls, cryptography, network 

    setTimeout(() => {
        resolve()
        // console.log('Async task is complete');
    }, 1000)
})

//* Promise Consumption
//* Promise resolve is connected to .then() method
promiseOne.then(() => {
    // console.log('Promise Consumed');
})

//! --------------------------------------------------------------

//*     another way to create promise

new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('Resolve Called');
        resolve()
    }, 1000);
}).then(
    () => {
        // console.log('then() 1 is called');
    }
).then(
    () => {
        // console.log('then() 2 is called');
    }
)

//! --------------------------------------------------------------

//* Passing Data through resolve()

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: 'suyash', rollNo: '104' }) //? Can pass anything here function, object etc.
    }, 1000)
})


promiseTwo.then((user) => {
    // console.log(user);
})


//! --------------------------------------------------------------
//* How Reject and finally works

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (error) {
            resolve({ username: 'suyash', rollNo: '104' })
        } else {
            reject('ERROR Occured !!! Something went wrong ')
        }
    }, 1000);
})

promiseThree
.then((user) => {
    return user.username
})
.then((user) => {
    // console.log('User returned from previous .then()');
    // console.log(user);
})
.catch((err) => {
    // console.error(err)
})
.finally(()=>{
    // console.log('Promise is either resolved or rejected');
});



//! --------------------------------------------------------------
//*     Promise using async await
const promiseFive = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        let error = false
        if (error) {
            resolve({ username: 'javascript', rollNo: '123' })
        } else {
            reject('ERROR Occured !!! Something went wrong ')
        }
    }, 1000);
})

//* async await cannot handle errors directly
//?  We need try catch to handle errors in async await

async function consumePromiseFive(params) {
        try{
            const response = await promiseFive
            console.log(response);   
        }catch (error) {
            console.log(error);
        }
}

// consumePromiseFive()


//! --------------------------------------------------------------
//* Using fetch() gives an Promise
async function getAllUsers(params) {
  try {
    const response = await  fetch('https://jsonplaceholder.typicode.com/users')
    // const data =  response.json() //? This is giving pending becouse .json() is also taking some time to convert response into json
    const data = await response.json() //? await is used to wait for json() method to convert the data into JSON
    console.log(data);

  } catch (error) {
    console.log(error);
  }
}
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log('This is working');
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})

//! To understand fetch better see fetch_execution.png