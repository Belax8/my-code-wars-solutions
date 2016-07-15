//Rules
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
*/


//My Code
function solution(number){
  var answer = 0;

  for(var i = 1; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      answer += i;
    }
  }
  return answer;
}


//Tests
solution(10); //should returns 23
solution(20); //should returns 78
solution(200); //should returns 9168
