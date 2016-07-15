//Rules
/*
The goal of this kata is to write a function that takes two inputs: a string and a character. The function will count the number of times that character appears in the string. The count is case insensitive.

For example:

countChar("fizzbuzz","z") => 4
countChar("Fancy fifth fly aloof","f") => 5
The character can be any alphanumeric character.

Good luck.
*/


//My Code
function countChar(string, char) {
  var num = 0;
  var array = string.split("");
  for(var i = 0; i < array.length; i++) {
    if(array[i].toLowerCase() === char.toLowerCase()) {
      num += 1;
    }
  }
  return num;
}


//Tests
countChar("fizzbuzz", "z"); //should return 4
