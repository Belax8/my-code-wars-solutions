//Rules
/*
Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null, your method should return an empty array.

Have fun coding it and please don't forget to vote and rank this kata! :-)
*/


//My Code
function averages(numbers) {
  let averages = [];
  //Edge case
  if(numbers == null || numbers.length < 2) {
    return averages;
  }
  //Find averages
  for(let i = 0; i < numbers.length - 1; i++) {
    let average = (numbers[i] + numbers[i+1]) / 2;
    averages.push(average);
  }

  return averages;
}


//Tests
averages([2, 2, 2, 2, 2]); //should return [2, 2, 2, 2]
averages([2, -2, 2, -2, 2]); //should return [0, 0, 0, 0]
averages([1, 3, 5, 1, -10]); //should return [2, 4, 3, -4.5]
