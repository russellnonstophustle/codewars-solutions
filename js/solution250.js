// Highest Rank Number in an Array

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    // make a map of the array
    let resultMap = {}
    for(let i = 0; i < arr.length; i++){
      resultMap[arr[i]] ? resultMap[arr[i]] += 1 : resultMap[arr[i]] = 1
    }
    // find the highest value in the map
    let highestValue = 0
    for(let key in resultMap){
      if(resultMap[key] > highestValue){
        highestValue = resultMap[key]
      }
    }
    // find the highest key in the map with the highest value
    let highestKey = 0
    for(let key in resultMap){
      if(resultMap[key] === highestValue){
        if(key > highestKey){
          highestKey = key
        }
      }
    }
    return Number(highestKey)   
  }