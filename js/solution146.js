// Replace all items 
// Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

// Python / JavaScript: The function has to work for strings and lists.

// Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

// replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2] -

function replaceAll(input, search, replacement) {
    // check if input is array or string
    if (Array.isArray(input)) {
        // if input is array map over items to replace search with replacement
       return input.map((item) => (item === search ? replacement : item));
    //    if input is string split at the search item and join with the replacement 
     } else if (typeof input === "string") {
       return input.split(search).join(replacement);
     }
   }