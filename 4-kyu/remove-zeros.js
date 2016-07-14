//Rules
/*
Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.
*/


//My Code
function removeZeros(array) {
  var num = 0;
  var answerCount = 0;
  var zeroCount = 0;
  var zeroCountAgain = 0;
  var zeros = [];
  var answer = [];

  for(var i = 0; i < array.length; i++) {
    if(array[i] === 0 || array[i] === '0') {
      zeros[zeroCount] = array[i];
      zeroCount += 1;
      num += 1;
    } else {
      answer[answerCount] = array[i];
      answerCount += 1;
    }
  }

  while(num > 0) {
    answer[answerCount] = zeros[zeroCountAgain];
    answerCount += 1;
    zeroCountAgain += 1;
    num -= 1;
  }

  return answer;
}


//Tests
removeZeros([7,2,3,0,4,6,0,0,13,0,78,0,0,19,14]); //should return [7,2,3,4,6,13,78,19,14,0,0,0,0,0,0]
removeZeros([ 1, null, '5', '0', '2', 0, 8, 6, null, false ]); //should return [ 1, null, '5', '2', 8, 6, null, false, '0', 0 ]
removeZeros([ { a: [ 'code' ] }, 0, { b: [ 'wars' ] }, 1 ]); //should return [ { a: [ 'code' ] }, { b: [ 'wars' ] }, 1, 0 ]
removeZeros([5]); //should return [5]
removeZeros([]); //should return []
removeZeros([ '0', '0', '0', 0, 1 ]); //should return [ 1, '0', '0', '0', 0 ]
removeZeros([ 4.5, 9.6, 0, 0.2, 1.5, 4000, 0, 5 ]); //should return [ 4.5, 9.6, 0.2, 1.5, 4000, 5, 0, 0 ]
removeZeros([ 1, 0, 2, 0, 3, 0 ]); //should return [ 1, 2, 3, 0, 0, 0 ]
