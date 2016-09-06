//Rules
/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/


//My Code
function longest(s1, s2) {
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let answer = '';

  for(let i = 0; i < letters.length; i++) {
    if(s1.indexOf(letters[i]) >= 0 || s2.indexOf(letters[i]) >= 0) {
      answer += letters[i];
    }
  }

  return answer;
}


//Tests
longest("aretheyhere", "yestheyarehere"); //should return "aehrsty"
longest("loopingisfunbutdangerous", "lessdangerousthancoding"); //should return "abcdefghilnoprstu"
longest("inmanylanguages", "theresapairoffunctions"); //should return "acefghilmnoprstuy"
