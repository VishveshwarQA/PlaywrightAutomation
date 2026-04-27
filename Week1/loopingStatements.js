//Looping statements using Javascript

function printOddNumbers(limit) {
    console.log("Odd numbers from 1 to "+limit+": ")
    for(let i=1;i<=limit;i++) {
        if(i%2!=0) 
            console.log(i)
    }
}

let limit = 25
printOddNumbers(limit)