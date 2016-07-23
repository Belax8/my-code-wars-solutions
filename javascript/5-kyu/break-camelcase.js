//Rules
/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example

solution('camelCasing') // => should return 'camel Casing'
*/


//My Code
function solution(string) {
  var answer = '';

  for(let i = 0; i < string.length; i++) {
    if(string[i] === string[i].toUpperCase() ) {
      answer += ' ' + string[i];
    } else {
      answer += string[i];
    }
  }
  return answer;
}


//Tests
solution('camelCase'); //should return 'camel Case'
solution('camelCaseTestingThis'); //should return 'camel Case Testing This'
solution('camelCaseAgain'); //should return 'camel Case Again'
