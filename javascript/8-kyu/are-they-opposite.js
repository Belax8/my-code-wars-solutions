//Rules
/*
Task

Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false.
The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string

Some examples:

isOpposite("ab","AB") should return true;
isOpposite("aB","Ab") should return true;
isOpposite("aBcd","AbCD") should return true;
isOpposite("AB","Ab") should return false;
isOpposite("","") should return false;
*/


//My Code
function isOpposite(s1,s2) {
  //Edge Cases
  if(s1.length < 1) {
    return false;
  }
  //Check if any don't match
  for(let i = 0; i < s1.length; i++) {
    if(s1[i] === s1[i].toUpperCase() && s2[i] === s2[i].toLowerCase() || s1[i] === s1[i].toLowerCase() && s2[i] === s2[i].toUpperCase()){
      //do nothing
    } else {
      return false;
    }
  }

  return true;
}


//Tests
isOpposite("ab","AB"); //should return true
isOpposite("aB","Ab"); //should return true
isOpposite("aBcd","AbCD"); //should return true
isOpposite("AB","Ab"); //should return false
isOpposite("",""); //should return false
