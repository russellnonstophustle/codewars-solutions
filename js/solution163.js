// Exes and Oh's 
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let oArr = []
    let xArr = []
    str.toLowerCase().split('')
      .map(letter => letter == 'o' ? oArr.push(letter) 
      : letter == 'x' ? xArr.push(letter) : '')
  return oArr.length == xArr.length ? true : false
}