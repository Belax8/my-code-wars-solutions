//Rules
/*
The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

Examples (in JavaScript):

hamming("I like turtles","I like turkeys")  //returns 3
hamming("Hello World","Hello World")  //returns 0
You can assume that the two input strings are of equal length.
*/


//My Code
function hamming(a,b) {
	var arrayA = a.split('');
  var arrayB = b.split('');
  var count = 1;

  for(let i = 0; i < arrayA.length; i++) {
    if(arrayA[i] != arrayB[i]) {
      count += 1;
    }
  }

  return count;

}


//Tests
hamming("I like turtles","I like turkeys"); //should return 3
hamming("Hello World","Hello World"); //should return 0
