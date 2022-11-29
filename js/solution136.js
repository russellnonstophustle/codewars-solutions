// Move Zeros to the End 
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        count++;
        arr.splice(i, 1);
        i--;
      }
    }
    for (let j = 0; j < count; j++) {
      arr.push(0);
    }
    return arr;
  }

//   Best Practice 

function moveZeros(arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))
  }