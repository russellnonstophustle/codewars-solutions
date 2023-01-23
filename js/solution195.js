// Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
// use a hash map and a result string 
    let key = {}
    let result = ''
// turn word into an array of letters 
    const arr = word.toLowerCase().split('')
// loop the array mapping the letters of the word
      for (const letter of arr){
        if(key.hasOwnProperty(letter)){
          key[letter] += 1
        }else{
          key[letter] = 1
        }
      }
// loop the array replacing the letters at each index with ) if > 1 occurence or ( if < 1 occurence and return the result
      for (let i =0; i < arr.length; i++){
        if(key[arr[i]] > 1){
          result += ')'
        }else{
          result += '('
        }
      }return result
    }