// Find Nearest Square Number 
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

// take Square root of n and round to nearest integer 
// square that integer and that is the nearest square
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);