//Rules
/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/


//My Code
function addLength(str){
  var splitStr = str.split(" ");
  var array = [];

  for(var i = 0; i < splitStr.length; i++) {
    array.push(splitStr[i] + " " + splitStr[i].toString().length);
  }

  return array;
}


//Tests
addLength('apple ban'); //should return ["apple 5", "ban 3"]
addLength('you will win'); //should return ["you 3", "will 4", "win 3"]
