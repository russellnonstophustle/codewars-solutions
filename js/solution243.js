// Exclamation marks series #2: Remove all exclamation marks from the end of sentence
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove (string) {  
    let result = string;
    // run this loop while the last character is a `!`
    while (result[result.length - 1] === "!") {
      // remove the last character (= `!`)
      result = result.slice(0, -1);
    }
    return result;
  }