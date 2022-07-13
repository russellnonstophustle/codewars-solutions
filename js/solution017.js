// Sum without highest and lowest number

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(arr){
    // check the array to have more than 2 elements, sum all except highest and lowest by
    // sorting sort() and starting the loop to sum at 1 rather than 0 and finishing 1 short of length
    if (arr == null){
      return 0;
    }else if (arr.length <2){
      return 0;
    }else {
      arr = arr.sort(function(a,b) {return a - b});
      let total = 0;
      for (let i = 1; i < arr.length - 1; i++){
        total += arr[i];
      }
      return total;
    }
  }
//   could also refactor using Math.min and max removing those and summing remaining 