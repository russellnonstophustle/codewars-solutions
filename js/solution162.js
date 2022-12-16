// WeIrD StRiNg CaSe 
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string){
    //   split string by words
    //   split words by letter in a new nested array w/ map and [...]
        return string.split(` `).map(s=>[...s]
    //   check the index is even
                                .map((e,i) => i % 2 
    //   if modulus returns 0 is false so uppercase or if integer is true so lowercase
                                ? e.toLowerCase():e.toUpperCase())
    //   join the letters of nested array and then join words back to string
                                .join(``)).join(` `);   
    }