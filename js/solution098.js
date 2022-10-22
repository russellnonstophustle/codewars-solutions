// Sort the Odd 
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    //   first get a sorted array of odd's, since 0 is false it will only grab odds which havee a remainder thus are true
      const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    //   map the array if true must be odd # as int are true so shift(), if false keep in position
       return array.map((x) => x % 2 ? odd.shift() : x);
    }