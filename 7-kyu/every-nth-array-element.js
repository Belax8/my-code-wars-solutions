//Rules
/*
Create a method (JS: function) every which returns every nth element of an array.

Usage

With no arguments, array.every it returns every element of the array.
With one argument, array.every(interval) it returns every intervalth element.
With two arguments, array.every(interval, start_index) it returns every intervalth element starting at index start_index

Note: due to fact JS translation ask for a function instead of an Array method the above uses will be :

javascript:
every(array)
every(array, interval)
every(array, interval, start_index)
Examples

every([0,1,2,3,4])     // [0,1,2,3,4]
every([0,1,2,3,4],1)   // [0,1,2,3,4]
every([0,1,2,3,4],3,1) // [1,4]
Notes

Test cases:

interval will always be a positive integer (but may be larger than the size of the array).
start_index will always be within the bounds of the array.
*/


//My Code
function every(arr, interval, start){
  var answer = [];
  var i = start === undefined ? 0 : start;

  do {
    answer.push(arr[i]);
    i = i + (interval === undefined ? 1 : interval);
  } while(i < arr.length);

  return answer;
}

//Tests
every([0,1,2,3,4]); //should return [0,1,2,3,4]
every([0,1,2,3,4],1); //should return [0,1,2,3,4]
every([0,1,2,3,4],2); //should return [0,2,4]
every([0,1,2,3,4],3); //should return [0,3]
every([0,1,2,3,4],3,1); //should return [1,4]
