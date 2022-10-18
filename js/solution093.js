// Are they the "same"? 
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
// Not sure why the first solution wasn't working but will come back to it 
// function comp(array1, array2){
//   if(array1 == null || array2 == null){
//         return false
//   }else if(array1.length == 0){
//     return true
//   }
//   let arr1 = array1.sort((a,b) => a - b).map(el => el**2)
//   let arr2 = array2.sort((a,b) => a - b)
//   console.log(arr1, arr2)
//   for (let i= 0; i < arr1.length; i++){
//     for (let j = 0; j < arr2.length; j++){
//      if(arr1[i] == arr2[j]){
//         return true
//       }return false
//     }
//   }
// }

// check there is an array
// check the lengths are the same
//  map the 1st array to sqaure it to match the second
// sort both and put both to string to compare 
const comp = (a1, a2) => {
    if (!a1 || !a2 || a1.length !== a2.length) return false;
    return a1.map(x => x * x).sort().toString() === a2.sort().toString();
  }