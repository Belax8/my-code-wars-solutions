//Rules
/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Note that the Java version expects a return value of null for an empty string or null.
*/


//My Code
String.prototype.toJadenCase = function () {
  let array = this.split(' ');
  let answer = [];

  for(let i = 0; i < array.length; i++) {
    let string = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    answer.push(string);
  }

  return answer.join(' ');
};


//Tests
var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase(); //should return "How Can Mirrors Be Real If Our Eyes Aren't Real"
