// Persistent Bugger 
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    //    P: a number, whole number 
    //    R: return a single digit number, the first time it is a single number
    //    E: 39 --> 3*9 = 27 2*7 = 14 1*4 = 4 so return 4
    //    P: pseudocode
      
    //   first, create variable to count iterations
    //   2, while loop to check if number is single digit using num.toString().length > 1
    //   3: if length > 1 split then multiply individual digits with reduce 
    //   4, if length !> 1 return iterations variable 
        let i = 0
        while (num.toString().length > 1){
          num = num.toString().split('').reduce((a,b) => a*b, 1)
          i++
        }
      return i
    }