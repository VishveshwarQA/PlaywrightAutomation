//Javascript program to categorize the number as Positive, Negative or Zero

function printNumberType(number) { 
    if(number>0) {
       return "Positive"
    }
    else if(number<0) {
        return "Negative"
    }
    else if(number===0){
        return "Zero"
    }
    else {
        return "Not valid"
    }
}

let number = 100
let result = printNumberType(number)
console.log(number+" is "+result)