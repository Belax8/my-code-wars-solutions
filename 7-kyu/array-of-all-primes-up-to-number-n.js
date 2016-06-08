//Rules
/*
Code a function which will return an array with all prime numbers smaller than or equal to an arbitrary parameter "n".

Assume that all parameters will be numbers.

Remember that in some test cases with a big enough "n", performance might be (more) important.
*/


//My Code
var primeArray = function(n) {
  var array = [];

  for(var i = 2; i <= n; i++) {
    for(var j = 2; j <= i; j++){
        //if they are divisible by i then they will 'break' in the next if statement
        //else they will be pushed to the array
      if(i === j) {
        array.push(i);
      }
      if(i % j === 0) {
        break;
      }
    }
  }
  return array;
}


//Tests
primeArray(1); //should return []
primeArray(2); //should return [2]
primeArray(4); //should return [2,3]
primeArray(29); //should return [2,3,5,7,11,13,17,19,23,29]
primeArray(100); //should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
