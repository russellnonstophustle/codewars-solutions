// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	let arr = s.toUpperCase().split('')
  let result = []
  for(let i = 0; i < arr.length; i++){
    if(i < 1){
      result.push(arr[i])
      }else{
        result.push(arr[i] + arr[i].toLowerCase().repeat(i))
      }
  }return result.join('-')
}

// best practice 

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}