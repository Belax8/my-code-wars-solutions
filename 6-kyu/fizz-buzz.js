//Rules
/*
Write a function that takes an integer and returns an Array [A, B, C] where A is the number of multiples of 3 (but not 5) less than the given integer, B is the number of multiples of 5 (but not 3) less than the given integer and C is the number of multiples of 3 and 5 less than the given integer.

For example, solution(20) should return [5, 2, 1]
*/


//My Code
function solution(number){
  var answer = [0,0,0];
  for(var i = 1; i < number; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      answer[2] += 1;
    } else if(i % 3 === 0) {
      answer[0] += 1;
    } else if(i % 5 === 0) {
      answer[1] += 1;
    }
  }
  return answer;
}


//Tests
solution(20); //should return [5,2,1]
solution(2); //should return [0,0,0]
solution(30); //should return [8,4,1]
solution(300); //should return [80,40,19]
