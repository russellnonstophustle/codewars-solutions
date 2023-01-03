// Enumerable Magic #25: Take the first N elements 
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.


function take(arr, n) {
    return arr.slice(0, n)
  }