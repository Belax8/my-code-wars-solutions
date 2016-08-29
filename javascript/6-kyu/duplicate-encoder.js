//Rules
/*
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("
*/


//My Code
function duplicateEncode(word){
  let array = word.toLowerCase().split('');
  let answer = '';

  for(let i = 0; i < array.length; i++) {
    let count = 0;
    //Count how many of each character
    for(let j = 0; j < array.length; j++) {
      if(array[i] === array[j]) {
        count += 1;
      }
    }
    //Add '(' or ')' depending on the number
    if(count > 1) {
      answer += ')';
    } else {
      answer += '(';
    }
  }

  return answer;
}


//Tests
duplicateEncode("din"); //should return "((("
duplicateEncode("recede"); //should return "()()()"
duplicateEncode("Success"); //should return ")())())"
duplicateEncode("(( @"); //should return "))(("
