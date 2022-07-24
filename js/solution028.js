// A Needle in the haystack

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"


function findNeedle(haystack) {
    // create a variable for what we are looking for
    // indexOf() returns the position it was found or -1 if not found
    // so create a variable for the indexOf() our needle in the haystack
    // if that variable is not -1 return the position
    const element = 'needle';
    let idx = haystack.indexOf(element);
      if (idx !== -1) {
        return "found the needle at position " + idx
  }
    }