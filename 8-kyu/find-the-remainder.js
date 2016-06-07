//Rules
/*
Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN. Arguments will both be integers.
*/


//My Code
function remainder(a, b){
  var min = a > b ? b : a;
  var max = a > b ? a : b;
  return min = 0 ? NaN : max % min;
}


//Test
remainder(17,5); //should return 2
remainder(13, 72); //should return 7
remainder(72, 13); //should return 7
remainder(1, 0); //should return NaN
remainder(0, 0); //should return NaN
