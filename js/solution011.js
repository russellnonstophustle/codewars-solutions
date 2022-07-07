// Century From Year 

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task:
// Given a year, return the century it is in.

function century(year) {
    //round up with Math.ceil and divide by 100 to find century ie the year 001 rounds up to be in the first century etc.
    return Math.ceil(year / 100);
  }