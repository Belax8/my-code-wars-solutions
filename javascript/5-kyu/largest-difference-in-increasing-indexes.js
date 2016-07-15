//Rules
/*
Summary: Write a function which takes an array data of numbers and returns the largest difference in indexes j - i such that data[i] <= data[j]

Long Description:

The largestDifference takes an array of numbers. That array is not sorted. Do not sort it or change the order of the elements in any way, or their values.

Consider all of the pairs of numbers in the array where the first one is less than or equal to the second one.

From these, find a pair where their positions in the array are farthest apart.

Return the difference between the indexes of the two array elements in this pair.

Example:

largestDifference([1,2,3]) ; // returns 2, because here j = 2 and i = 0 and 2 - 0 = 2
*/


//My Code
var largestDifference = function(data) {
  var answer = 0;
  for(var i = 0; i < data.length; i++) {
    for(var j = i; j < data.length; j++) {
      if(data[i] <= data[j] && j - i > answer) {
        answer = j - i;
      }
    }
  }
  return answer;
};


//Tests
largestDifference([9,4,1,10,3,4,0,-1,-2]); //should return 4
largestDifference([3,2,1]); //should return 0
largestDifference([78,88,64,94,17,91,57,69,38,62,13,17,35,15,20]); //should return 10
largestDifference([9,4,1,2,3,4,0,-1,-2]); //should return 4
largestDifference([1,2,3]); //should return 2
