//Rules
/*
Write
  function smaller(arr)
  that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

For example:
  smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
  smaller([1, 2, 0]) === [1, 1, 0]
*/


//My Code
function smaller(nums) {
  var array = [];

  for(var i = 0; i < nums.length; i++) {
    var addedNum = 0;

    for(var j = i; j < nums.length; j++) {
      if(nums[i] > nums[j]) {
        addedNum +=1;
      }

    }

    array.push(addedNum);
  }
  return array;
}


//Tests
smaller([5, 4, 3, 2, 1]); //should return [4, 3, 2, 1, 0]
smaller([1, 2, 3]); //should return [0, 0, 0]
smaller([1, 2, 0]); //should return [1, 1, 0]
smaller([1, 2, 1]); //should return [0, 1, 0]
smaller([1, 1, -1, 0, 0]); //should return [3, 3, 0, 0, 0]
smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]); //should return [4, 1, 5, 5, 0, 0, 0, 0, 0]
