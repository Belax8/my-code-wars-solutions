//Rules
/*
Given an integer n return 'odd' if the number of its divisors is odd. Otherwise return 'even'.

Examples:

All prime numbers have exactly two divisors (hence 'even')

For n=12 the divisors are [1,2,3,4,6,12] – 'even'

For n=4 the divisors are [1,2,4] – 'odd'
*/


//My Code
function oddity(n){
  return Math.sqrt(n) % 1 ? "even" : "odd";
}


//Tests
oddity(1); //should return 'odd'
oddity(5); //should return 'even'
oddity(16); //should return 'odd'
oddity(121); //should return 'odd'
oddity(881611); //should return 'even'
oddity(6); //should return 'even'
oddity(8874330); //should return 'even'
