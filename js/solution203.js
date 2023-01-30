// Delete Ocurrences of an element if it occurs more than n times 
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr,n){
    //   create a hash map to check ocurrences 
      let hashMap = {}
    //   loop the array to add key or increment keys
        for (let i = 0; i < arr.length; i++){
    //       if hashMap has key and is less than n increment it
          if(hashMap[arr[i]] < n){
            hashMap[arr[i]] += 1
    //         if hashMap has key and value is equal to n don't add to value
          }else if (hashMap[arr[i]] == n){
            hashMap[arr[i]] += 0
    //         if hashMap does not have key, add key and give value 1
          }else{
            hashMap[arr[i]] = 1
          }
        }
    //   create result array 
      let result = []
    //   loop items in array comparing to key values 
        for(let j = 0; j < arr.length; j++){
    //       check key value and push array item if value is positive
          if(hashMap[arr[j]] > 0){
            result.push(arr[j])
    //         each push of an item decrements key value 
            hashMap[arr[j]] -= 1
        }
    //       return result array with same order but only occuring n or less times 
      }return result
    }