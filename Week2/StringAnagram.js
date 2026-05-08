//Javascript program to find the given strings are anagram or not

let s  = "anagram"
let s1 = "na gar am"

s  = s.trim() 
s1 = s1.trim()

s1 = s1.replace(/\s/g, "") //this is the reg-ex expression to remove the space located in between the string value

console.log(s)
console.log(s1)

result1  = sort(s)
result2 = sort(s1)

const checkAnagram = isAnagram(result1,result2) //verify using the method isAnagram

function sort(s) {  //sort the given string and return it as a char array
    let temp = []
    for(let i=0;i<s.length;i++) { 
        temp[i] = s.charAt(i).toString()
    }
    temp.sort()
    return temp
}

function isAnagram(result1,result2) {  //methods to verify the given strings are anagram or not 
    for(let i=0;i<result1.length;i++) { 
        if(result1[i]===result2[i]) { 
            flag = true
        }
        else { 
            flag = false
        }
    }

    if(flag) 
        console.log(`Given words are anagram`)
    else
        console.log(`Given words are not an anagram`)
}