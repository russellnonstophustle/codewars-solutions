// Beginner Series #2 Clock
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since 
// midnight in milliseconds.


function past(h, m, s){
    //Convert hours
    if (h >= 0 && h <= 23){
      h = h * 3600000;
    // Convert Minutes
    }if (m >= 0 && m <= 59){
      m = m * 60000;
    //Convert Seconds 
    }if (s >= 0 && s <= 59){
      s = s * 1000;
    }else {
      return(null)
    }
      let time = h + m + s
    return time
  }