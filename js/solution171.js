// Quarter of the Year 
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (m) => {
    return m > 9 ? 4 : m > 6 ? 3 : m > 3 ? 2 : m > 0 ? 1 : 0  
  }

//    Clever Answer 

// const quarterOf = m => Math.ceil(m/3);

// by using ceiling and dividing by 3 we get the correct quarter 