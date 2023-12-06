// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id= '123qnb'
tinderUser.name ='John'
tinderUser.isLoggedIn = false

const regularUser = {
    email:'sm@gmail.com',
    fullName:{
        firstName:'Suyash',
        lastName:'Mishra'
    }
}
// console.log(regularUser.fullName?.lastName); //* question mark ? gives optional

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}


// const obj3 = Object.assign({}, obj1 , obj2) //* assign(target,source)  By using object class 
const obj3 = {...obj1,...obj2} //* Using Spread Operator
// console.log(obj3);

// console.log(Object.keys(tinderUser)); //? Array of keys
// console.log(Object.values(tinderUser)); //? Array of values
// console.log(Object.entries(tinderUser)); //? Array inside and arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename:'js Course',
    price: '999',
    courseInstructor : 'Suyash'
}

// course.courseInstructor

//*  Object Destructuring

const {courseInstructor: instructor} = course

// console.log(instructor);


//!  JSON Api

const jsonApi =  {
    name:'Suyash',
    designation:'Frontend',
    package:'6.25'
}

const arrInApi = [
    {...jsonApi} , {...course}
]

// console.log(arrInApi);

const obj = {
    "results":[
       {
          "gender":"female",
          "name":{
             "title":"Mrs",
             "first":"Javeria",
             "last":"Salian"
          },
          "location":{
             "street":{
                "number":9520,
                "name":"Camac St"
             },
             "city":"Ambala",
             "state":"Manipur",
             "country":"India",
             "postcode":84786,
             "coordinates":{
                "latitude":"11.9347",
                "longitude":"95.0949"
             },
             "timezone":{
                "offset":"+3:00",
                "description":"Baghdad, Riyadh, Moscow, St. Petersburg"
             }
          },
          "email":"javeria.salian@example.com",
          "login":{
             "uuid":"4c89f109-d07b-43cd-8cff-278ebd206c68",
             "username":"yellowcat547",
             "password":"yaya",
             "salt":"dDQlV2pX",
             "md5":"eb2dd3d073a13cdd268d7f18f943c0f7",
             "sha1":"944aba8b40a141334ace5d01459134ed867bb83b",
             "sha256":"c079778b5106e75b9bf5ef945ab9c8764eba5bd25fe7ce2f3b9c74f4f07308e8"
          },
          "dob":{
             "date":"1973-07-12T00:05:49.640Z",
             "age":50
          },
          "registered":{
             "date":"2020-05-27T18:42:10.745Z",
             "age":3
          },
          "phone":"9104745212",
          "cell":"8834893696",
          "id":{
             "name":"UIDAI",
             "value":"111923586855"
          },
          "picture":{
             "large":"https://randomuser.me/api/portraits/women/69.jpg",
             "medium":"https://randomuser.me/api/portraits/med/women/69.jpg",
             "thumbnail":"https://randomuser.me/api/portraits/thumb/women/69.jpg"
          },
          "nat":"IN"
       }
    ],
    "info":{
       "seed":"90565b86018c838e",
       "results":1,
       "page":1,
       "version":"1.4"
    }
 }


 /* 
*      The spread operator (...) in JavaScript performs a shallow copy, not a deep copy. 
*      This means that while the top-level properties of an object are copied, 
*      any nested objects or arrays within the object will still reference the same objects as the original.

      For example, consider the following code:
*/
const originalObject = {
   prop1: 'value1',
   prop2: {
     nestedProp1: 'nestedValue1',
     nestedProp2: 'nestedValue2'
   }
 };
 
 // Shallow copy using spread operator
 const shallowCopy = { ...originalObject };
 
 // Modify the nested property in the shallow copy
 shallowCopy.prop2.nestedProp1 = 'modifiedValue';
 
 console.log(originalObject.prop2.nestedProp1); // Output: 'modifiedValue'

/*
*         If you need to create a deep copy of an object with nested structures,
*         you can use alternative methods such as JSON.parse(JSON.stringify(originalObject)) or 
*         specialized libraries like Lodash, which provides a _.cloneDeep function. 
*         Here's an example using the JSON method:

*/

const originalObject2 = {
   prop1: 'value1',
   prop2: {
     nestedProp1: 'nestedValue1',
     nestedProp2: 'nestedValue2'
   }
 };
 
 // Deep copy using JSON method
 const deepCopy = JSON.parse(JSON.stringify(originalObject2));
 
 // Modify the nested property in the deep copy
 deepCopy.prop2.nestedProp1 = 'modifiedValue';
 
 console.log(originalObject2.prop2.nestedProp1); // Output: 'nestedValue1'