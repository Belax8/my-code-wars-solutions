//Rules
/*
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

generateRange(2, 10, 2) should return array of [2,4,6,8,10] generateRange(1, 10, 3) should return array of [1,4,7,10]
*/


//My Code
function generateRange(min, max, step){
  var array = [];
  var i = min;
  do {
    array.push(i);
    i += step;
  } while(i <= max);
  return array;
}


//Tests
generateRange(2, 10, 2); //should return [2,4,6,8,10]
