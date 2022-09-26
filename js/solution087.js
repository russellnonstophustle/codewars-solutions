// Break Camel Case 
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    const regex = /([a-z])([A-Z])/g;
    const spaces = string.replace(regex, '$1 $2');
    return spaces;
  }
// or
  function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }
//   or with map()
function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }