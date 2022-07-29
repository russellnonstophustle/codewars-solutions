// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

// This one was tricky, using the loop to concatenate the number to the string
// first create the empty string to fill, then loop to the num from 1 as we don't count 0 sheep
var countSheep = function (num){
    let sheep = ''
    
        for (i = 1; i <= num; i++) {
            sheep += i + ' sheep...'
        }
        return sheep
      }