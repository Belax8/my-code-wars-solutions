//Rules
/*
Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"
*/


//My Code
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}


//Tests
reverseWords("hello world!"); //should return "world! hello"
reverseWords("yoda doesn't speak like this"); //should return "this like speak doesn't yoda"
reverseWords("foobar"); //should return "foobar"
reverseWords("kata editor"); //should return "editor kata"
reverseWords("row row row your boat"); //should return "boat your row row row"
