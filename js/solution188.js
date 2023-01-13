// Count Constanants
// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    //   first replace all vowels and numbers and underscore with empty string
      const noVowels = str.replace(/[aeiou0-9_]/gi, '');
    //   replace all special char with empty string
      const onlyConst = noVowels.replace(/\W/g, '')
    // return length of leftover str
      return onlyConst.length
    }