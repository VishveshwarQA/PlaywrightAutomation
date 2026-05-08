//Javascript program to learn the arrays concept

let constNums = [2,4,5,2,1,2,4] //defining an array

const k     = 4 //define the number which you want to find the occurances
let count   = 0 //this is a counter
for(let i=0;i<constNums.length;i++) {
    if(constNums[i]===k) {
        count++; //increase the counter when the array number matches with the given number
    }
}

console.log(`The given number ${k} is occuring ${count} times in the array`)
