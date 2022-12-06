// Transform to Prime 
// Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

// Notes
// List size is at least 2 .

// List's numbers will only positives (n > 0) .

// Repetition of numbers in the list could occur .

// The newer list's sum should equal the closest prime number .

// Input >> Output Examples
// 1- minimumNumber ({3,1,2}) ==> return (1)
// Explanation:
// Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .

function minimumNumber(numbers) {
    // First, calculate the sum of the given numbers
    let sum = numbers.reduce((a, b) => a + b, 0);
    if(isPrime(sum)) return 0
  
    // Then, find the closest prime number to the sum
    // Start with the next number after the sum and keep checking if it is prime
    let closestPrime = sum + 1;
    while (!isPrime(closestPrime)) {
      closestPrime++;
    }
  
    // Finally, return the difference between the closest prime and the sum
    return closestPrime - sum;
  }
  
  // Helper function to check if a number is prime
  function isPrime(number) {
    // 1 and 0 are not prime numbers
    if (number <= 1) return false;
  
    // Check if the number is divisible by any number between 2 and the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
  
    // If the number is not divisible by any of the above numbers, it is prime
    return true;
  }