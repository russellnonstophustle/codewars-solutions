// Find the Odd Int 
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    //   create variable to keep count and sort the array to count
     let count = 0
     let arr = A.sort((a,b) => a - b)
    //  create two loops to check against eachother for repeated values 
     for (let i =0; i < arr.length; i++){
       for (let j=0; j<arr.length; j++){
         if (arr[i] == arr[j]){
    //        if value is repeated increment the count
           count++
         }
    //      if count mod 2 is false we found our odd element and return it
       } if(count % 2 !== 0){
         return arr[i]
       }
     }
    }

