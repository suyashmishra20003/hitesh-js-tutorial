let myDate =  new Date();
//? type of Date is Object

// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getMonth() + 1);
// console.log(myDate.getTime());
// console.log(myDate.toJSON());

//? To get the date string array with all info
// console.log(myDate.toString().replace('(','').replace(')','').split(' '));

// let myCreatedDate = new Date(2023 , 11 ,23);
// let myCreatedDate = new Date(2023 , 11 ,23 ,5 ,3);
// let myCreatedDate = new Date('1995-09-19'); //* yyyy-mm-dd
let myCreatedDate = new Date('01-08-2003'); //* mm-dd-yyyy
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now() //* milliseconds from 1 Jan 1970 to till now
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //* in ms
// console.log(Math.floor(Date.now()/1000)); //* in sec

myDate.toLocaleString('default', 
    {
        weekday:'long'
    }
)