// Reversed Strings 

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    // split, reverse, join.. split to array, reverse works on array, join back to string
    let reverseStr = str.split('').reverse().join('');
    return reverseStr
  }