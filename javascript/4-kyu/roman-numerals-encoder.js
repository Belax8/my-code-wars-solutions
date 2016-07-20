//Rules
/*
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals
*/


//My Code
function solution(number){
  var romanized = "";
  var romanNum = ["I","IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M", "MMM", "MMMM"];
  var romanValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000, 3000, 4000];
  var numLeft = number;

  do {
    for(var i = 0; i < romanValue.length; i++) {
      if (+romanValue[i] <= numLeft && +romanValue[+i + 1] > numLeft) {
        romanized += romanNum[i];
        numLeft -= romanValue[i];
      }
    }
  } while(numLeft > 0);
  return romanized;
}


//Tests
solution(12); //should return "XII"
solution(16); //should return "XVI"
solution(29); //should return "XXIX"
solution(83); //should return "LXXXIII"
solution(97); //should return "XCVII"
solution(99); //should return "XCIX"
solution(1023); //should return "MXXIII"
solution(2014); //should return "MMXIV"
solution(3999); //should return "MMMCMXCIX"
