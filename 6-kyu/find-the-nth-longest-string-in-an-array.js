//Rules
/*
Implement the function longest(array,n) where you will be given an array of strings and then return the nth longest string in that array. e.g. arr = ['Hello','World','Codewars','Katas'] n = 3; should return 'World' because 'Codewars' length = 8 , 'Hello' length = 5, so that is the 2nd longest word and then 'World' (although also word length of 5, 'World' is after 'Hello' in the array). When words have the same lengths, treat them in the order in which they exist in the array. Array will never be empty and n > 0 always.
*/


//My Code
function longest(arr, n) {
  var longestWord = 0;
  var array = [];

    //find the longest word
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length > longestWord) {
      longestWord = arr[i].length;
    }
  }
    //sort them in order of length
  do {
    for(var j = 0; j < arr.length; j++) {
      if(arr[j].length === longestWord) {
        array.push(arr[j]);
      }
    }
    longestWord -= 1;
  } while(longestWord > 0);

  return array[n-1];

}


//Tests
longest(['Hello','World','Codewars','Katas'],3); //should return 'World'
longest(['Hello','World','Codewars','Katas'],4); //should return 'Katas'
longest(['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'],4); //should return 'aa'
longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'],1); //should return 'a'
longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k','l'],1); //should return 'a'
