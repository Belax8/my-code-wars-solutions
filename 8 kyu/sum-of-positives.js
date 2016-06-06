//Rules
/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20
*/


//My Code
function positiveSum(arr) {
  var num = 0;

  for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0) {
      num += arr[i];
    }
  }

  return num;
}


//Tests
positiveSum([1, 2, 3, 4, 5]); //should return 15
positiveSum([1, -2, 3, 4, 5]); //should return 13
positiveSum([]); //should return 0
positiveSum([-1, -2, -3, -4, -5]); //should return 0
positiveSum([-1, 2, 3, 4, -5]); //should return 9
