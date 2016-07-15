//Rules
/*
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

Assume that [a,b,c,d] and the answer are all integers (no floating numbers!).
*/


//My Code
function slope(points) {
  var rise = points[1] - points[3];
  var run = points[0] - points[2];
  return run === 0 ? "undefined" : Math.round(rise/run).toString();
}


//Tests
slope([19,3,20,3]); //should return "0"
slope([2,7,4,-7]); //should return "-7"
slope([10,50,30,150]); //should return "5"
slope([15,45,12,60]); //should return "-5"
slope([10,20,20,80]); //should return "6"
slope([-10,6,-10,3]); //should return "undefined"
