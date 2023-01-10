// CamelCase Method 
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase=function(){
    //   use this. to represent the input, map the first etter of each word to uppercase
    //   add the rest of the word with slice and after the map join the words back to string
      return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
    }