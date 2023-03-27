// Divide and Counquer 
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.


function divCon(x){
    let strArr = x.filter(function (item) {
      return !(parseInt(item) === item)
    })
    let numArr = x.filter(function (item) {
      return (parseInt(item) === item)
    })
    return numArr.reduce((a,c) => a + c, 0) - strArr.reduce((a,c) => +a + +c, 0)
    
   }