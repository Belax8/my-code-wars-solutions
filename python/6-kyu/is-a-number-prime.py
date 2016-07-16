# Rules
"""
Define a function isPrime that takes one integer argument and returns true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Example

isPrime(5)
=> true
Assumptions

You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers.
"""


# My Code
def is_prime(num):
  if num < 2:
      return False
  elif num == 2:
      return True
  else:
      i = 2
      while i < num:
          if num % i == 0:
              return False
          i += 1
  return True


# Tests
is_prime(0) #should return False
is_prime(1) #should return False
is_prime(2) #should return True
