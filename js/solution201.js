// Snail 
// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:

const snail = (array) =>{
    //   create a result array 
      let result = []
    //   we will be removing items from the og array until it is empty
      while(array.length){
    //     (moving right) we push the entire nested array by pushing the shift
        result.push(...array.shift())
    //     (moving down) we pop off the last items from each nested array
        for (let i = 0; i < array.length; i++){
          result.push(array[i].pop())
        }
    //     (moving left) we pop the entire last nested array and reverse it to push to result..
    //     or we provide an empty array if no items are there so we don't get undefined err w/ reverse
        result.push(...(array.pop() || []).reverse())
    //     (moving up) from last remaining array we go back through shifting off first items
        for (let i = array.length -1; i >= 0; i--){
          result.push(array[i].shift())
        }
    //     the while loop will continue snail-ing until there are no remaining items
      }
    //   return result
      return result
    }