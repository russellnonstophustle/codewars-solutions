// Alternate Capitalization 

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    //   will recieve string in all lower case 
    //   split to an array and use map with variable and index, if index is even cap variable for first split
    //   for second split check index is not even and cap the variable and return both in an array 
      return [s.split('').map((v,i)=>i%2==0?v.toUpperCase():v.toLowerCase()).join(''),
              s.split('').map((v,i)=>i%2!==0?v.toUpperCase():v.toLowerCase()).join('')]
    };