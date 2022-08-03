// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    // the + sign on the c is a unary plus operator, 
    // it attempts to convert any value into a number.
    return (x).reduce((a,c) => a + +c, 0);
  }