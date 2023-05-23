// +1 Array 
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

function upArray(arr) {
    // Check if the array is empty
    if (!arr.length) {
      return null;
    }
  
    // Check if the array contains invalid values
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0 || arr[i] > 9) {
        return null;
      }
    }
  
    // Add 1 to the value represented by the array
    let carry = 1;
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      const sumVal = arr[i] + carry;
      if (sumVal >= 10) {
        carry = 1;
        result.unshift(sumVal % 10);
      } else {
        carry = 0;
        result.unshift(sumVal);
      }
    }
  
    if (carry) {
      result.unshift(carry);
    }
  
    return result;
  }