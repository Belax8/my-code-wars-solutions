//Rules
/*
Summation

Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/


//My Code
var summation = function (num) {
  var sum = 0;
  for(var i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}


//Tests
summation(1); //should return 1
summation(8); //should return 36
summation(100); //should return 5050
summation(38); //should return 741
summation(91); //should return 4186
summation(23); //should return 276
