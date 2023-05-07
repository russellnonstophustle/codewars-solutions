// Data Reverse 
// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.


function dataReverse(data) {
  let byteArr = []
  while(data.length){
  byteArr.push(data.splice(0,8).join(''))
  }
  byteArr.reverse().join('').split('')
  let arr = byteArr.toString().split('')
  console.log(arr)
  let result = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] != ','){
    result.push(+arr[i])
      }
  }
  return result
}