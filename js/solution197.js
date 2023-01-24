// Previous Multiple of Three 
// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

// Examples
// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9

const prevMultOfThree = n => {
    //   check for value
      if (n === 0) return null;
    //   check if value is divisible by 3
      if (n%3 === 0) return n;
    //   recursively check by slicing off last digit and retrying
      return prevMultOfThree(+n.toString().slice(0, -1))
    }