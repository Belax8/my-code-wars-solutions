//Rules
/*
You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/


//My Code
function longestConsec(strarr, k) {
  var longest = [0,0];
  var answer = '';

  if(strarr.length === 0 || k > strarr.length || k <= 0) {
    return '';
  }
  else {
      //find the longest set of words
    for(var i = 0; i < strarr.length - k + 1; i++) {
      let string = '';
      for(var j = 0; j < k; j++) {
        string += strarr[i + j];
      }
      if(string.length > longest[0]) {
        longest[0] = string.length;
        longest[1] = i;
      }
    }
      //save longest set of words to answer
    for(var m = 0; m < k; m++) {
      answer += strarr[longest[1] + m];
    }
    return answer;
  }
}


//Tests
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2); //should return "abigailtheta"
longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1); //should return "oocccffuucccjjjkkkjyyyeehh"
longestConsec([], 3); //should return ""
longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2); //should return "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
*longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2); //should return "wlwsasphmxxowiaxujylentrklctozmymu"
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2); //should return ""
*longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3); //should return "ixoyx3452zzzzzzzzzzzz"
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15); //should return ""
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0); //should return ""
