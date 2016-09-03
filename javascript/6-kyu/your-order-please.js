//Rules
/*
Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
*/


//My Code
function order(words){
  let splitStr = words.split(' ');
  let answerStr = '';
  let count = 1;
  let length = splitStr.length;

  while(count <= length) {
    for(let i = 0; i < splitStr.length; i++) {
      for(let j = 0; j < splitStr[i].length; j++) {
        if(splitStr[i][j] == count) {
          answerStr += splitStr[i];
          answerStr += ' ';
        }
      }
    }
    count += 1;
  }
  return answerStr.slice(0, -1);
}


//Tests
order("is2 Thi1s T4est 3a"); //should return "Thi1s is2 3a T4est"
order("4of Fo1r pe6ople g3ood th5e the2"); //should return "Fo1r the2 g3ood 4of th5e pe6ople"
order(""); //should return ""
