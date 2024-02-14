function SetUserName(username) {
    // complex DB calls
    this.username = username
    // console.log('This is Called');
}

function createUser(username,email,password) {
    //* call() is used to calling the function with explicitllay setting the value of this (execution context)
    // SetUserName(username) //! This gets called but it does not gives the property username beacuse all its properties and variables are erased as it goes to global context (window object)
    //? To Overcome this problem
    SetUserName.call(this, username)
    //* Call passes the execution context of our function to other function
    this.email = email
    this.password = password

}


const user = new createUser('suyash','sm@gmail.com','123')

// console.log(user);

let obj = {
    abc:'suyash',
    display:function(){
        console.log(this.abc);
    }
}

let myFunc = obj.display
// obj.display()
// myFunc.call(obj)


function setAge(age) {
    this.age = age
    console.log('this is calling',this.age);
}


function setRole(age,name,role) {
    setAge(age)
    this.name = name
    this.role = role
}

const role = new setRole(20,'suyash','admin')

console.log(role);