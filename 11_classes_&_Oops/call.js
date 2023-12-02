function SetUserName(username) {
    // complex DB calls
    this.username = username
    console.log('This is Called');
}

function createUser(username,email,password) {
    // SetUserName(username) //! This  gets called but it does not gives the property username beacuse all its properties and variables are erased as it goes to global context (window object)
    //? To Overcome this problem
    SetUserName.call(this, username)
    //* Call passes the execution context of our function to other function
    this.email = email
    this.password = password

}


const user = new createUser('suyash','sm@gmail.com','123')

console.log(user);