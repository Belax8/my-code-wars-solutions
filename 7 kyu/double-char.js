//Rules
/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
*/


//My Code
function doubleChar(str) {
  var splitStr = str.split("");
  var newString = "";

  for(var i = 0; i < str.length; i++) {
    newString += splitStr[i];
    newString += splitStr[i];
  }
  return newString;
}


//Tests
doubleChar("abcd"); //should return "aabbccdd"
doubleChar("Adidas"); //should return "AAddiiddaass"
doubleChar("1337"); //should return "11333377"
doubleChar("illuminati"); //should return "iilllluummiinnaattii"
doubleChar("123456"); //should return "112233445566"
doubleChar("%^&*("); //should return "%%^^&&**(("
