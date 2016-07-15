//Rules
/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3)==15
multiply(10)==250
multiply(200)==25000
multiply(0)==0
multiply(-3)==-15
*/


//My Code
function multiply(number){
  var num = number < 0 ? number.toString().split("").length - 1 : number.toString().split("").length;
  var answer = 1;
  for(var i = 0; i < num; i++) {
    answer *= 5;
  }
  return answer * number;
}


//Tests
multiply(10); //should return 250
multiply(5); //should return 25
multiply(200); //should return 25000
multiply(0); //should return 0
multiply(-2); //should return -10
