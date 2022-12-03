// Human Readable Time

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds % 3600) / 60)
    let second = (seconds % 3600) % 60
      if (seconds == 0){
       return '00:00:00'
    }
      if (hours   < 10) {hours   = "0"+hours;}
      if (mins < 10) {mins = "0"+mins;}
      if (second < 10) {second = "0"+second;}
    
    
    console.log(`${hours}:${mins}:${second}`)
    return `${hours}:${mins}:${second}`;
  }

//   Best Practice -- most clever answers

function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
           pad(parseInt(seconds / 60 % 60)) + ":" +
           pad(seconds % 60)
  }