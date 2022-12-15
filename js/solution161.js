// Move the Zeroes to the End 

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    // iterate over the array checking for non zeroes, and move them to result arr
      let result = []
      let zeroArr = []
        arr.map(item => item !== 0 ? 
    //   move zeroes to a zero array 
          result.push(item) : zeroArr.push(item)
        )
        console.log(result)
        console.log(zeroArr)
    //   concat (add) zero arr to result arr and return
      return result.concat(zeroArr)
    }