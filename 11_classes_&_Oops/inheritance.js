class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        //* Whenever a new class object is initialised constructor function is the first function to be called
        super(username) //* super() keyword automatically goes to extended class and sets the value of username
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user = new Teacher('SuyAsh','sm@gmail.com','1234')
console.log(user);
console.log(user.addCourse());
console.log(user.logMe());
console.log(user instanceof Teacher);
