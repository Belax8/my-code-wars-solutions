//Rules
/*
Is Prime

Define a function isPrime that takes one integer argument and returns true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Example

isPrime(5)
=> true
Assumptions

You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers.
*/


//My Code
function isPrime(num) {
  if(num < 2) {
   return false;
  } else if( num === 2) {
    return true;
  } else {
    for(var i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
  }
  return true;
}


//Tests
isPrime(0); //should return false
isPrime(1); //should return false
isPrime(2); //should return true
isPrime(3); //should return true
isPrime(4); //should return false
isPrime(5); //should return true
isPrime(6); //should return false
isPrime(7); //should return true
isPrime(8); //should return false
isPrime(9); //should return false
isPrime(41); //should return true
isPrime(45); //should return false
isPrime(73); //should return true
isPrime(75); //should return false
isPrime(5099); //should return true
isPrime(-1); //should return false
