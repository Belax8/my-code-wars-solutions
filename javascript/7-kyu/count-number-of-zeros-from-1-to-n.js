//Rules
/*
Create an algorithm to count the number of zeros that appear between 1 and N.

Examples:

There are 2 zeros from 1 to 20: 10, 20

There are 11 zeros from 1 to 100: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

countZeros(10); // returns 1
countZeros(100); // returns 11
countZeros(200); // returns 31
*/


//MyCode
function countZeros(n) {
  var count = 0;
  for(var i = 1; i <= n; i++) {
    var string = i.toString();
    if(string.indexOf("0") >= 0) {
      var splitStr = string.split("");
      for(var j = 0; j < splitStr.length; j++) {
        if(splitStr[j].indexOf(0) >= 0) {
          count += 1;
        }
      }
    }
  }
  return count;
}


//Tests
countZeros(10); //should return 1
countZeros(100); //should return 11
countZeros(200); //should return 31
countZeros(4779); //should return 1347
countZeros(2050); //should return 556
countZeros(312); //should return 61
countZeros(2660); //should return 726
