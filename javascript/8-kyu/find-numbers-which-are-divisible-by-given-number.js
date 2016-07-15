//Rules
/*
Write a function which takes two arguments and returns all number, which are divisible by given divisor. First argument is array of numbers and the second is divisor.

Example

divisibleBy([1,2,3,4,5,6], 2) == [2,4,6]

*/


//My Code
function divisibleBy(numbers, divisor){
  var array = [];

  for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] % divisor === 0) {
      array.push(numbers[i]);
    }
  }
  return array;
}


//Tests
divisibleBy([1,2,3,4,5,6], 2); //should return [2,4,6]
divisibleBy([1,2,3,4,5,6], 3); //should return [3,6]
divisibleBy([0,1,2,3,4,5,6], 4); //should return [0,4]
divisibleBy([0,1,2,3,4,5,6,7,8,9,10], 3); //should return [0,3,6,9]
