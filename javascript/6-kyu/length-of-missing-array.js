//Rules
/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


If the array of arrays is null/nil or empty, return 0.

When an array in the array is null or empty, return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/


//My Code
function getLengthOfMissingArray(arrays) {
  let array = [];

  //Test edge case
  if(arrays === null || arrays.length === 0) {
    return 0;
  }

  //Push the lengths into an array
  for(let i = 0; i < arrays.length; i++) {
    if(arrays[i] == null || arrays[i].length === 0) {
      return 0;
    } else {
      array.push(arrays[i].length);
    }
  }

  //Sort array
  let sorted = array.sort(function(a, b){return a - b});

  //Find missing number
  for(let j = 0; j < sorted.length; j++) {
    if(sorted[j] + 1 === sorted[j + 1]) {
      //do nothing
    } else {
      return sorted[j] + 1;
    }
  }
}


//Tests
getLengthOfMissingArray([ ]); //should return 0
getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ); //should return 3
getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ); //should return 2
getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ); //should return 2
