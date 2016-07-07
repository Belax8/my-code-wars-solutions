//Rules
/*
Your task is to make two functions, max and min that take a vector of integers list as input and outputs, respectively, the largest and lowest number in that vector.

Examples

max({4,6,2,1,9,63,-134,566}) returns 566
min({-52, 56, 30, 29, -54, 0, -110}) returns -110
max({5}) returns 5
min({42, 54, 65, 87, 0}) returns 0
Notes

You may consider that there will not be any empty vectors.
*/


//My Code
var min = function(list){
    var num = 999999999999999999999999999999999999999999999999;
    for(var i = 0; i < list.length; i++) {
      if(list[i] < num) {
        num = list[i];
      }
    }
    return num;
}

var max = function(list){
  var num = -99999999999999999999999999999999999999999999999;
  for(var i = 0; i < list.length; i++) {
    if(list[i] > num) {
      num = list[i];
    }
  }
  return num;
}


//Tests
min([-52, 56, 30, 29, -54, 0, -110]); //should return -110
min([42, 54, 65, 87, 0]); //should return 0

max([4,6,2,1,9,63,-134,566]); //should return 566
max([5]); //should return 5
