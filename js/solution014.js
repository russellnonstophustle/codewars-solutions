// Beginner - Reduce but Grow
// Given a non-empty array of integers, 
// return the result of multiplying the values together in order. 
// Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    // hint in the title, use reduce() to accumulate the values of all elements 
    // in the array by multiplication
    let result = x.reduce((sum, current) => sum * current);
    return(result)
  }