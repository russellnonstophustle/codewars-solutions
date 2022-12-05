// Scramblies
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
    //   create an object to hold the letter count of each letter in str1
     let letterHolder = {};
     for (let letter of str1) {
       if(letterHolder[letter]) letterHolder[letter]++;
       else letterHolder[letter] = 1;
     }
    //   check that the letterHolder object has the letter in str2, 
    //   if so remove one count if not return false
     for (let letter of str2) {
       if(!letterHolder[letter]) return false
       else letterHolder[letter]--;
     }
    //   if letterHolder has enough letters to match str2 letters return true 
     return true;
    }