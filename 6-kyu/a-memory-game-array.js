//Rules
/*
In a simple memory game (http://en.wikipedia.org/wiki/Concentration_(game)) we need an array containing tiles represented by integers in pairs.

Memory games basics

In the memory game, numbers are randomly placed face-down in a grid. Each turn, the player chooses a number to peek at, and then replace, face down. If they choose two of the same number in a row, those numbers are removed from the grid. The aim is to clear the board!

Your job is to produce an array of pairs of numbers, placed in a random spot in the array.

The array (and result) could look somthing like:

[3,1,2,1,3,2,4,4]
for an 8 tile memory game. (4 pairs). createTiles(8)

Your task is to implement the function createTiles(n) where n is the number of tiles. The function should return an array with the length n containing randomized, paired, integers starting with 1. Duplicate pairs are not allowed.

Special cases:

if n is odd or zero, an empty array should be returned
*/


//My Code
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

function createTiles(n){
  var numbers = [];
  var array = [];

  if(n === 0 || n % 2 != 0) {
    return array;
  }
    //push all the numbers to an array
  for(var i = 1; i <= n / 2; i++) {
    numbers.push(i);
    numbers.push(i);
  }
    //randomly select a number and push it to the final array and delete it so i doesn't get used again
  do {
    var num = Math.floor(Math.random() * numbers.length);
    array.push(numbers[num]);
    numbers.remove(num);
  } while(numbers.length > 0);

  return array;
}


//Tests
createTiles(20); //should return something like [2,10,8,9,7,8,1,1,3,4,5,3,7,10,2,9,6,6,5,4]
createTiles(11); //should return []
createTiles(0); //should return []
createTiles(50); //should return something like [13,1,22,6,17,25,19,7,20,5,4,17,22,6,20,9,11,16,1,24,18,15,14,23,7,25,19,16,11,23,24,3,8,10,18,9,21,5,12,8,21,3,15,12,13,4,10,14,2,2]
