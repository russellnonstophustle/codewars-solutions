// Adding Big Numbers 
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
    let sum = '';
      let carry = 0;
      let diff = b.length - a.length;
      for (let i = a.length - 1; i >= 0; i--) {
          let temp =
              (Number(a.charAt(i)) % 10) +
              (Number(b.charAt(i + diff)) % 10) +
              carry;
          if (temp >= 10) {
              sum = (temp % 10) + sum;
              carry = Math.floor(temp / 10);
          } else {
              sum = temp + sum;
              carry = 0;
          }
      }
      if (carry) {
          sum = carry + sum;
      }
      return sum;
   
  }