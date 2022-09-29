// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter){  
    let count = 0
    let strArr = str.split('')
    for (let i =0; i < str.length; i++){
      if(strArr[i] === letter){
        count += 1
      }
    }return count
  }

// Super Clever Answer:  .split() will insert an empty string, '' , into position whenever it finds two or more characters grouped together. 
// This is why 'Hello' turns into ['He', '', 'o'], and 'Helllo' turns into ['He', '', '', 'o'], but 'Helo' does the normal thing and turns into ['He', 'o']
// checks the length of the array after split() and substracts 1. If you have 'abcd', and split it by 'b'(the result would need to be 1) 
// you will have [a, cd] which has length 2, then 2-1 its 1 :D
function strCount(str, letter){  
    return str.split(letter).length-1
  }