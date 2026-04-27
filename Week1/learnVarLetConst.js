//Javascript program to learn Var, Let and Const variables

function getBrowserName(browserName) {
    if(browserName==="chrome") {
        // var browserName = "firefox" //using var -- you will get the output as "firefox" as it will override your const variable due to no block scope restrictions
        let browserName = "firefox" //this will stop your scope of the let variable value once the "if" block is over
    }
    console.log(browserName)
}

const browserName = "chrome"
getBrowserName(browserName)

