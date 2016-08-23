//Rules
/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.

For example:

[2, 4, 0, 100, 4, 11, 2602, 36]

Should return: 11

[160, 3, 1719, 19, 11, 13, -21]

Should return: 160
*/


//My Code
function findOutlier(integers){
  //Set up variables
  let first = integers[0] % 2 === 0 ? 'even' : 'odd';
  let second = integers[1] % 2 === 0 ? 'even' : 'odd';
  let third = integers[2] % 2 === 0 ? 'even' : 'odd';
  let isEven;

  //Find out if it's even or odd
  if(first === 'even' && second === 'even') {
    isEven = true;
  } else if(second === 'even' && third === 'even') {
    isEven = true;
  } else if(first === 'even' && third === 'even') {
    isEven = true;
  } else {
    isEven = false;
  }

  //Find the odd one out and return it
  if(isEven) {
    for(let i = 0; i < integers.length; i++) {
      if(integers[i] % 2 != 0) {
        return integers[i];
      }
    }
  } else {
    for(let j = 0; j < integers.length; j++) {
      if(integers[j] % 2 === 0) {
        return integers[j];
      }
    }
  }
}


//Tests
findOutlier([0, 1, 2]); //should return 1
findOutlier([1, 2, 3]); //should return 2
findOutlier([2,6,8,10,3]); //should return 3
findOutlier([0,0,3,0,0]); //should return 3
findOutlier([1,1,0,1,1]); //should return 0
