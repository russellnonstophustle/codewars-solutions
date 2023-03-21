// Sum of numbers from 0 to n
// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let sumArr = []
      let answer = ''
      if(count < 0){return `${count}<0`}
      if(count === 0){return `${count}=0`}
      for(let i = 0; i <= count; i++){
        sumArr.push(i)
        answer += `${i}+`
      }let sum = sumArr.reduce((a,c) => a + c, 0)
      answer = answer.split('').slice(0,-1).join('')
      return `${answer} = ${sum}`
    };
  
    return SequenceSum;
  
  })();