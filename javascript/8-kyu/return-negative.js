//Rules
/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:
  makeNegative(1); // return -1
  makeNegative(-5); // return -5
  makeNegative(0); // return 0

Notes:
  The number can be negative already, in which case no change is required.
  Zero (0) can't be negative, see examples above.
*/


//My Code
function makeNegative(num) {
  return num > 0? num * -1: num;
}


//Tests
makeNegative(42); //should return -42
makeNegative(-9); //should return -9
makeNegative(0); //should return 0
