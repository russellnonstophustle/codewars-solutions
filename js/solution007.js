// Invert Values
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.


function invert(array) {
    let invertArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
          invertArray.push(array[i] * -1);
      }
      if (array[i] < 0) {
          invertArray.push(Math.abs(array[i]));
      }
      if (array[i] == 0) {
          invertArray.push(-0);
      }
  }
     return invertArray;
  }