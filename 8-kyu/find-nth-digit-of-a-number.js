//Rules
/*
The function findDigit takes two numbers as input, num and nth. It outputs the nth digit of num (counting from right to left).

Note

If num is negative, ignore its sign and treat it as a positive value.
If nth is not positive, return -1.
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0.
Examples

findDigit(5673, 4)     returns 5
findDigit(129, 2)      returns 2
findDigit(-2825, 3)    returns 8
findDigit(-456, 4)     returns 0
findDigit(0, 20)       returns 0
findDigit(65, 0)       returns -1
findDigit(24, -8)      returns -1
*/


//My Code
var findDigit = function(num, nth){
  if(num < 0) {
    num = num * -1;
  }

  var array = num.toString().split('');

  if(nth < 1) {
    return -1;
  }
  else if(array.length < nth) {
    return 0;
  } else {
    return parseInt(array[array.length - nth]);
  }

}


//Tests
findDigit(5673, 4); //should return 5
findDigit(129, 2); //should return 2
findDigit(-2825, 3); //should return 8
findDigit(-456, 4); //should return 0
findDigit(0, 20); //should return 0
findDigit(65, 0); //should return -1
findDigit(24, -8); //should return -1
