//Javascript program for intersection of two arrays

// let array1 = [1,1,5,2,4]
// let array2 = [3,1,5,4,4,3]

let array1 = [3,2,5,1,4,2,3,3,1,9,9,1]
let array2 = [7,8,2,3,6,1,1,5,3,4,7]

//first, remove the duplicates from the both the arrays before finding the intersection
function removeDuplicates(arr) {
   let duplicateFlag
   let uniqueArray     = []
   for(let i=0;i<arr.length;i++) {
        duplicateFlag = true
        for(let j=0;j<uniqueArray.length;j++) {
            if(arr[i]===uniqueArray[j]) { 
                duplicateFlag = false
                break
            }
        }
        if(duplicateFlag===true) {
            uniqueArray[uniqueArray.length] = arr[i]  //1 5 2 4 
        }
   }
   return uniqueArray
}


const result1 = removeDuplicates(array1)
const result2 = removeDuplicates(array2)
//console.log(result1) // 1 5 2 4 
//console.log(result2) //3 1 5 4

//find the intersection between two arrays - result and array2
function findIntersection(arr1,arr2) {
    for(let i=0;i<arr1.length;i++) {
        for(let j=0;j<arr2.length;j++) {
            if(arr1[i]===arr2[j]) {
                arr2.splice(j,1)
            }
        }
    }
    //console.log(arr2) //3
    return arr2
}

//Printing the intersecting array elements
console.log(`Printing the intersecting array elemets after sorting: `)
const intersectionResult = result1.concat(findIntersection(result1,result2))
intersectionResult.sort((a,b)=>(a-b))
console.log(intersectionResult)