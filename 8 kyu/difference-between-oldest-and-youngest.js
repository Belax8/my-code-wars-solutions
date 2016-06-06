//Rules
/*
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
*/


//My Code
function differenceInAges(ages){

  var arr = [];
  var youngest = 99999999999;
  var oldest = 0;

  for(var i = 0; i < ages.length; i++) {
    if(ages[i] < youngest) {
      youngest = ages[i];
    }
    if(ages[i] > oldest) {
      oldest = ages[i];
    }
  }

  arr.push(youngest);
  arr.push(oldest);
  arr.push(oldest - youngest);

  return arr;
}


//Tests
differenceInAges([82, 15, 6, 38, 35]); //should return [6, 82, 76]
differenceInAges([57, 99, 14, 32]); //should return [14, 99, 85]
