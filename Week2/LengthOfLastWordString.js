//Javascript program to return the length of the last word in the given string

let s = "      Hello World       " 
s = s.trim()
const splitString = s.split(" ")
const result = splitString[splitString.length-1]
console.log(`The last word in the given string: ${result} and the length is: ${result.length}`)