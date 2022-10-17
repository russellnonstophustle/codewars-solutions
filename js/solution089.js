// Find the Stray Number 

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    // first sort the numbers to make it easy to find the odd one out
    let arr=numbers.sort();
    // now check to see if the first is the odd one out
      if(arr[0]!==arr[1]){
        return arr[0];    
      }
    //   if not the first then must be the last 
      else {
        return arr[arr.length-1];
      }
  }