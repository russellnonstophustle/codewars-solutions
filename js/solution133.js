// Isograms 
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    //   P: Given a word with or without repeating characters, always string, never empty
    //   R: true or false
    //   E:isIsogram "Dermatoglyphics" = true- isIsogram "moose" = false- isIsogram "aba" = false
    //   P:split the word into an array, remove duplicates and match against og true or false
    //   let strArr = str.toLowerCase().split('')
       str = str.toLowerCase();
       for(let i = 0; i < str.length; ++i) {
         for(let j = i + 1; j < str.length; ++j) {
           if(str[i] === str[j]) {
             return false;
           }
         }
       }
       return true;
    }