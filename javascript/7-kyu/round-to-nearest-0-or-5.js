// Rules
/*
Given an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.

For example:

roundToFive([34.5, 56.2, 11, 13]);
should return

[35, 55, 10, 15]
*/


// My Code
function roundToFive(numbers){
  return numbers.map(n => Math.round(n / 5) * 5);
}


// Tests
roundToFive([34.5, 56.2, 11, 13]); // Should return [35, 55, 10, 15]
roundToFive([1,5,87,45,8,8]); // Should return [0, 5, 85, 45, 10, 10]
