class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return '123'
    }
}

const suyash = new User('suyash')
// console.log(suyash.createId()); //! This gives error!! due to static keyword
//* static keyword is used to stop access to createId form one instance class to other

class Engineer extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const shikhar = new Engineer('shubham','sm@gmail.com')

console.log(shikhar);