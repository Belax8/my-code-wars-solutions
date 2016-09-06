//Rules
/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/


//My Code
var moveZeros = function (arr) {
  let count = 0;
  let array = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      count += 1;
    } else {
      array.push(arr[i]);
    }
  }

  while(count > 0) {
    array.push(0);
    count -= 1;
  }

  return array;
}


//Tests
moveZeros([1,2,0,1,0,1,0,3,0,1])); //should return [1,2,1,1,3,1,0,0,0,0]
