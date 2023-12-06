class User  {
    constructor(email,password){
        this.email  = email
        this.password = password
    }

    get email(){
        //*  This always return
        return this._email.toUpperCase()
    }

    set email(value){
        //*  This does not need return
        this._email = value
    }

    get password(){
        //*  Name of the method should be equal the name of the property or it will give error 
        //*  If you defined a getter you have to define a setter or it will give a error
        //*  Runs when user is trying to get the value
        return this._password.toUpperCase()
    }

    set password (value){
        //! Maximum call stack size exceeded
        //?  Error occurs because setter and constructor both are trying to set the value
        //?  they are in race with each other to set the value in Object   
        this._password = value
    }
}

const suyash = new User('suyash@gmail.com' , 'abc')

console.log(suyash);
console.log(suyash.email);