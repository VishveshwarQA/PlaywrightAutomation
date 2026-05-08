//Javascript program to write the callback functions 

function userProfile(name) { //user defined function
    console.log(`Hello ${name}`)
}

userProfile("Vishveshwar")

const double = (number) => (number*number) //fat arrow function 
console.log(double(5))

const setTimeout = function () {  //anonymous function as it doesn't have a function name
    console.log(`This message is delayed by 2 seconds`)
}
setTimeout() //calling the anonymous function using the variable name in which it was stored 


function getUserData(callback) { //getting the function as a parameter 
    setTimeout() //calling the set time out function directly 
    callback("vishveshwar") //use callback options to call the callbackfunction (i.e) userProfile function
}

getUserData(userProfile) //passing the function set timeout to the getUserData function 