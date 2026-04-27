//Javascript program to understand the scoping of Block, Function and global scope

function printGender() {
    let color = "brown" //function variable

    if(genderType.startsWith("female")) {
        var age = 30 //block variable
        let color = "pink"
        console.log("Printing the color inside block: "+color)
    }
    console.log("Printing the age outside the block but inside the function: "+age) //even though we declare the var age inside the block it considers as function level declaration -- that's why it is printing undefined instead of reference error.
    console.log("Printing the color outside block: "+color)  //This line helps to understand how let has block restrictions involved
}

let genderType = "female" //global variable
printGender()
console.log("Printing the Gender type globally: ",genderType) 

genderType = "male" //global variable
printGender()
console.log("Printing the Gender type globally: ",genderType)

