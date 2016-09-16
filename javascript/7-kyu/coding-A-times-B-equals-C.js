//Rules
/*
Task:

Give you a number array numbers and a number c.

Find out a pair of numbers(we called them number a and number b) from the array numbers, let a*b=c, result format is an array [a,b]

The array numbers is a sorted array, value range: -100...100

The result will be the first pair of numbers, for example,findAB([1,2,3,4,5,6],6) should return [1,6], instead of [2,3]
*/


//My Code
function findAB(numbers,c){
 let len = numbers.length;

  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      if(j != i && numbers[i] * numbers[j] === c) {
        return [numbers[i], numbers[j]];
      }
    }
  }

  return null;
}


//Tests
findAB([1,2,3],3); //should return [1,3]
findAB([1,2,3],6); //should return [2,3]
findAB([1,2,3],7); //should return null
findAB([1,2,3,6],6); //should return [1,6]
findAB([1,2,3,4,5,6],15); //should return [3,5]
findAB([0,0,2],4); //should return null
findAB([0,0,2,2],4); //should return [2,2]
findAB([-3,-2,-2,-1,0,1,2,3,4],4); //should return [-2,-2]
findAB([-3,-2,-2,-1,0,1,2,3,4],0); //should return [-3,0]
findAB([-3,-2,-1,0,1,2,3,4],4); //should return [1,4]
