// Arrays Similar 
// Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

// var arr1 = [1, 2, 2, 3, 4],
//     arr2 = [2, 1, 2, 4, 3],
//     arr3 = [1, 2, 3, 4],
//     arr4 = [1, 2, 3, "4"]
// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false

function arraysSimilar(a1, a2) {
    a1.sort((a,b) => a - b)
    a2.sort((a,b) => a - b)
     return  a1.length === a2.length && a1.every((element, index) => element === a2[index]);
 }