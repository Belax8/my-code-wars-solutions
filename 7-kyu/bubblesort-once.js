//Rules
/*
Overview

The Bubblesort Algorithm is one of many algorithms used to sort a list of similar items (e.g. all numbers or all letters) into either ascending order or descending order. Given a list (e.g.):

[9,7,5,3,1,2,4,6,8]
To sort this list in ascending order using Bubblesort, you first have to compare the first two terms of the list. If the first term is larger than the second term, you perform a swap. The list then becomes:

[7,9,5,3,1,2,4,6,8] // The "9" and "7" have been swapped because 9 is larger than 7 and thus 9 should be after 7
You then proceed by comparing the 2nd and 3rd terms, performing a swap when necessary, and then the 3rd and 4th term, then the 4th and 5th term, etc. etc. When you reach the end of the list, it is said that you have completed 1 complete pass.

Task

Program an algorithm in Javascript (or your selected language, if it is available) that performs exactly 1 complete pass (no more, no less :D) of the Bubblesort algorithm to a list of positive integers. You may assume all arguments provided are arrays containing at least 2 positive integers.

The built in sort() method for arrays has been disabled in this exercise. Even if you were to use it, you may not get the correct answer(s) every time as 1 complete pass in Bubblesort rarely gives you a completely sorted array.
*/


//My Code
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

function bubblesortOnce(intArr) {
  for(var i = 0; i < intArr.length; i++) {
    if(intArr[i] > intArr[i+1]) {
      var larger = intArr[i];
      intArr.remove(i);
      intArr.splice(i+1, 0, larger);
    }
  }
  return intArr;
}


//Tests
bubblesortOnce([9,7,5,3,1,2,4,6,8]); //should return [7,5,3,1,2,4,6,8,9]
bubblesortOnce([89,36]); //should return [36,89]
bubblesortOnce([1,9,5,5]); //should return [1,5,5,9]
bubblesortOnce([6,3,4,9,1,2,7,8,5]); //should return [3,4,6,1,2,7,8,5,9]
bubblesortOnce([1,2,3,4]); //should return [1,2,3,4]
bubblesortOnce([1032,3192,2864]); //should return [1032,2864,3192]
