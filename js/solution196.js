// Split Strings 
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    //   create a result array to hold pairs
       let result = []
    //    check the string if odd or even, if odd add a _ to the end
       if (str.length % 2 != 0){str += '_'};
    //   split the string into individual elements in an array 
       let strArr = str.split('')
    //    check if the string is empty
       if (str.length == 0){return result};
    //     loop string array and push to result the pairs 
      for(let i = 0; i < strArr.length; i++){
          if(i % 2 == 0){
          result.push(strArr.slice(i, i + 2).join(''))
        }
    //     return result array
        }return result
    }