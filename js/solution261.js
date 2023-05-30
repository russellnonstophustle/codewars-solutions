// Tip Calculator
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
    rating.toUpperCase() == `TERRIBLE` ? rating = 0 : rating.toUpperCase() == `POOR` ? rating = .05 :
    rating.toUpperCase() == `GOOD` ? rating = .10 : rating.toUpperCase() == `GREAT` ? rating = .15 :
    rating.toUpperCase() == `EXCELLENT` ? rating = .20 : rating = 1 ;
    
    return rating < 1  ?  Math.ceil(amount * rating) : "Rating not recognised" 
  }