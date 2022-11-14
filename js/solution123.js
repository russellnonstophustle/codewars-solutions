// Find The Capitals

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

let capitals = function (word) {
  let arr = []
  let wordSplit = word.split('')
  for (let i = 0; i < word.length; i++){
    if (wordSplit[i] == wordSplit[i].toUpperCase()){
      arr.push(i)
    }
  }return arr
};

// Highest Voted Answer

var capitals = function (word) {
    return word.split('').reduce(function(memo, v, i) {
      return v === v.toUpperCase() ? memo.concat(i) : memo;
    }, []);
  };