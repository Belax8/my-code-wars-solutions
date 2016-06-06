//Rules
/*
This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected outputs: an array of positive integers from 1 to n

Your job is to write an algorithm that gets you from the input to the output.
*/


//My Code
function preFizz(n) {
  var arr = [];
  for(var i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}


//Tests
preFizz(1); //should return [1]
preFizz(2); //should return [1,2]
preFizz(3); //should return [1,2,3]
preFizz(4); //should return [1,2,3,4]
preFizz(5); //should return [1,2,3,4,5]
