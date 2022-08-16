// Shortest Word 

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){
    // make an array of the words using split on a space then sort using length 
    // return 0 element which will be the shortest
    let arr = s.split(" ").sort((a, b) => a.length - b.length);
    return arr[0].length
  }