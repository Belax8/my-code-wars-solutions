//Rules
/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with '£' (JS and Java) or '$' (C#, Ruby and Python).
*/


//My Code
function bonusTime(salary, bonus) {
  if(bonus) {
    return '£' + salary * 10;
  } else {
    return '£' + salary;
  }
}


//Tests
bonusTime(10000, true); //should return '£100000'
bonusTime(25000, true); //should return '£250000'
bonusTime(10000, false); //should return '£10000'
bonusTime(60000, false); //should return '£60000'
bonusTime(2, true); //should return '£20'
bonusTime(78, false); //should return '£78'
bonusTime(67890, true); //should return '£678900'
