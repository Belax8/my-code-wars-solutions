//Rules
/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
Input

A word (string) of length 0 < str < 1000

Output

The middle character(s) of the word represented as a string.
*/


//My Code
function getMiddle(s) {
  if(s.length % 2 === 0) {
    while(s.length > 2) {
      s = s.substr(1);
      s = s.substring(0, s.length - 1);
    }
    return s;
  }
  else {
    while(s.length > 1) {
      s = s.substr(1);
      s = s.substring(0, s.length - 1);
    }
    return s;
  }
}


//Tests
getMiddle("test"); //should return "es"
getMiddle("testing"); //should return "t"
getMiddle("middle"); //should return "dd"
getMiddle("A"); //should return "A"
