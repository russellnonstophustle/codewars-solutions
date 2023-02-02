// Sum of Odd Numbers 
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    let result = []
      for (let i = 1; i <= n; i++){
      if(i == n){
        let firstNum = ((i * i) - (i - 1))
        let lastNum = ((i * i) + (i - 1))
        for(let j = firstNum; j <= lastNum; j+=2){
          result.push(j)
        }
      }
    }return result.reduce((a,c) => a + c,0)
  }