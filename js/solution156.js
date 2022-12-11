// Find the Missing letter 

// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array){
    const key = 'abcdefghijklmnopqrstuvwxyz'
    const keyArr = key.split('')
    const upperKey = key.toUpperCase().split('')
    let start = keyArr.indexOf(array[0])
    let upperStart = upperKey.indexOf(array[0])
    
    if(array[0] == array[0].toLowerCase()){
      for(let i = 0; i < array.length; i++){
        if(array[i] !== keyArr[start + i] ){
          return keyArr[start + i]
        }
      }
      }else{
        for(let i = 0; i < array.length; i++){
        if(array[i] !== upperKey[upperStart + i] ){
          return upperKey[upperStart + i]
        }
      }
      }
      
    
  }