// factorial 
// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n){
    let total = 1
    for(let i = 1; i <= n; i++){
      total *= i
    }return total
  }