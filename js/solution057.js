// Vowel Count 
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    // initialize a total 
    let total = 0
    // turn str into an array
    let arr = str.split('')
    // loop the array and increment total if a vowel is found
    for (let i = 0; i < arr.length; i++){
      if(arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u"){
        total++
      }
    //   return total outside of loop to make sure the loop completes all iterations
    }return total
  }