//Rules
/*
Task
Complete function splitOddAndEven, accept a number n(n>0), return an array that contais the continuous parts of odd or even digits.

Please don't think about digit 0, it won't appear ;-)


Examples
splitOddAndEven(123)  ===  [1,2,3]

splitOddAndEven(223)  ===  [22,3]

splitOddAndEven(111)  ===  [111]

splitOddAndEven(13579)  ===  [13579]

splitOddAndEven(135246)  ===  [135,246]

splitOddAndEven(123456)  ===  [1,2,3,4,5,6]
*/


//My Code
function checkIfEven(num) {
  return num % 2 === 0;
}

function splitOddAndEven(n) {
  //Variables
  let numbers = n.toString().split('');
  let isEven = checkIfEven(numbers[0]);
  let string = '';
  let answer = [];

  //Check each number with the number in front of it
  for(let i = 0; i < numbers.length; i++) {
    let currentNumIsEven = checkIfEven(numbers[i]);
    //If it is the same as the last number than add it to the current string
    //Else push it and start a new string
    if(isEven === currentNumIsEven) {
      string += numbers[i];
    } else {
      isEven = currentNumIsEven;
      answer.push(parseInt(string));
      string = numbers[i];
    }
  }
  //Push whatever is left
  answer.push(parseInt(string));

  return answer;
}


//Tests
splitOddAndEven(123); //should return [1,2,3]
splitOddAndEven(223); //should return [22,3]
splitOddAndEven(111); //should return [111]
splitOddAndEven(13579); //should return [13579]
splitOddAndEven(135246); //should return [135,246]
splitOddAndEven(123456); //should return [1,2,3,4,5,6]
