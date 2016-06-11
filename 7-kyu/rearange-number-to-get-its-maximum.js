//Rules
/*
Create function that takes one positive three digit integer and rearanges its digits to get maximum possible number. Assume that argument is integer. Return null if argument is not valid.

maxRedigit(123); // returns 321
*/


//My Code
var maxRedigit = function(num) {
  var answer = [];

  if(num < 100 || num > 999) {
    return null;
  }
  else {
    var array = num.toString().split("");
    for(var i = 9; i >= 0; i--) {
      for(var j = 0; j < array.length; j++) {
        if(array[j] == i) {
          answer.push(array[j]);
        }
      }
    }
  }
  return parseInt(answer.join(""));
};


//Tests
maxRedigit(123); //should return 321
maxRedigit(-1); //should return null
maxRedigit(0); //should return null
maxRedigit(99); //should return null
maxRedigit(1000); //should return null
maxRedigit(485); //should return 854
