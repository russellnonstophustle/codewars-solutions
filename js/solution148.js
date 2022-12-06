// Count characters in your string

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Brute Force 
function count (string) {  
// check the string isn't empty, if empty send back empty object
    let letterCount= {}
        if(string.length == 0){
        return {}
    }
// loop through the string checking if the object has the property, if not add the property and with count of 1, if has property add 1 to that property
    for (let letter of string){
      if(letterCount.hasOwnProperty(letter)){
        letterCount[letter] += 1
      }else{
        letterCount[`${letter}`] = 1
      }
    }return letterCount
  }

//   Best Practice

function count (string) {  
    var count = {};
// split the string into array, loop the letters with forEach()
    string.split('').forEach(function(s) {
// if a count object property exist add 1, if false create the property and set to 1
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }