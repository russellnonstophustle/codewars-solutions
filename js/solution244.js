// Build a square
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer){
    let string = ``
    let count = 0
    const stringLength = integer * integer + integer 
    for(let i = 1; i <= stringLength; i++){
      string += '+'
      if(i % integer == 0  && i != stringLength){
        string += '\n'
        count++
        if(count == integer){
          return string.split('').slice(0,-1).join('')
        }
      }
    }
    return string.split('').slice(0,-1).join('')
  }