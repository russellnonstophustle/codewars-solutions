// Counting Sheep 
// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    // initialize a variable to hold the number of sheep
    // loop through the arrayOfSheep and add for each true value
    let num = 0;
    
    for(let i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] == true)
        num++;
    }  
    return num;
  }
// refactored using filter and returning length of filtered array.. filter will return 'truthy' values
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
  }