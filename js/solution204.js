// Find the Next Perfect Square! 
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let sqRoot = Math.sqrt(sq)
    let nextSq = (sqRoot + 1) * (sqRoot + 1)
      if(Math.sqrt(sq) % 1 != 0){
        return -1
      }else{
        return nextSq
      }
    }

    // Clever Solution

    function findNextSquare(sq) {
        return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
      }
    //   if the sqrt of sq is 0, the value of 0 is false which then fires the second half of the ternary operation, if there is an integer value remaining then it was not a perfect square to begin with and an integer value is true so returns -1