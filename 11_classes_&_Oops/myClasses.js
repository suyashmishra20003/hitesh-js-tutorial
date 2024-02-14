// ES6

class User {
    constructor(username, email, password){
        //* Whenever a new class object is initialised constructor function is the first function to be called
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    userNameUpperCase(){
        return this.username.toUpperCase()
    }
}

const user = new User('SuyAsh','sm@gmail.com','1234')

console.log(user.encryptPassword());
console.log(user.userNameUpperCase());

//* Behind the Scene

function User(username,email,password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}def`
}
User.prototype.userNameUpperCase = function () {
    return this.username.toUpperCase()
}

const tea = new User('SuyAsh','sm@gmail.com','1234')

console.log(tea.encryptPassword());
console.log(tea.userNameUpperCase());