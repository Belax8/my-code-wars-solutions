//Rules
/*
Description:

We want to generate a function that computes the series starting from 0 and ending untill the given number following the sequence:

0 1 3 6 10 15 21 28 36 45 55 ....

Wich is created by

0, 0+1, 0+1+2, 0+1+2+3, 0+1+2+3+4, 0+1+2+3+4+5, 0+1+2+3+4+5+6, 0+1+2+3+4+5+6+7 etc..

Input:

LastNumber

Output:

series and result

Example:

Input:

> 6
Output:

0+1+2+3+4+5+6 = 21
Input:

> -15
Output:

-15<0
Input:

> 0
Output:

0=0
*/


//My Code
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    //Edge cases
    if(count < 0) {
      return count + '<0';
    } else if(count === 0) {
      return '0=0';
    }
    //Set up variables
    let num = 0;
    let str = '';
    let answer = 0;
    //Add Everything together
    while(num <= count) {
      str += num + '+';
      answer += num;
      num += 1;
    }
    str = str.slice(0,-1);
    str += ' = ' + answer;

    return str;
  };

  return SequenceSum;
})();


//Tests
SequenceSum.showSequence(6); //should return "0+1+2+3+4+5+6 = 21"
