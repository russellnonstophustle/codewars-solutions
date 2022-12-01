// Find Count of Most Frequent Item in an Array
// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.

function mostFrequentItemCount(arr) {
    // P: an array of integers, neg and pos, only numbers
    // R: return the count of the most frequent item, if empty array return 0
    // E: (mostFrequentItemCount([3, -1, -1]), 2); || (mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);
    // P: initialize a counter, and a variable to store the highest count so far
      let count = 0
      let mostFreq = 1
    //   first check if empty array
      if (arr.length < 1){
        return 0
      }
    //   loop through, nest a loop to check frequency
      for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
    //   if inner loop item matches outerloop item increase the count by 1
          if (arr[i] == arr[j]){
            count++
          }if(count > mostFreq){
    // check that the count is higher than 1 occurence and if so make mostFreq equal count, next 
    // iteration will check against new mostFreq number and if count is higher will replace value etc. 
            mostFreq = count
          }
    // must refresh count before moving outerloop iteration or will just count all items :D
        }count = 0
      }return mostFreq
      
    }