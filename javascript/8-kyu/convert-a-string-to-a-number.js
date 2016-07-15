//Rules
/*
Description

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples

stringToNumber("1234") == 1234
stringToNumber("605" ) == 605
stringToNumber("1405") == 1405
stringToNumber("-7"  ) == -7
*/


//My Code
var stringToNumber = function(str){
  return parseInt(str);
}


//Tests
stringToNumber("1234"); //should return 1234
stringToNumber("605"); //should return 605
stringToNumber("1405"); //should return 1405
stringToNumber("-7"); //should return -7
