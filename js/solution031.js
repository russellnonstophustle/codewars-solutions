// How Good Are You really?
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


function betterThanAverage(classPoints, yourPoints) {
    // first declare a variable that will hold the sum of class scores with reduce()
    // remember reduce() uses reduce((accumulator, Current) => operation, starting index)
    // then add your scores to the class scores and average them, remember to add yourself to the class score length to divide by
    // finally compare your scores to class scores
    let classTotal = classPoints.reduce((acc,c)=> acc + c, 0);
    const classAvg = (classTotal + yourPoints)/(classPoints.length + 1);
    if (yourPoints > classAvg){
      return true
    }else{
      return false
    }
     
  }