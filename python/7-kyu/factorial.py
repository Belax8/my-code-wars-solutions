# Rules
"""
Write function 'factorial' - this is a Haskell 'Hello World' like kata.
"""


# My Code
def factorial(n):
    count = 1
    # Edge case
    if n < 1:
        return 1
    # Do the math
    i = 1
    while i <= n:
        count = count * i
        i += 1
    return count


# Tests
factorial(0) #should return 1
factorial(1) #should return 1
factorial(2) #should return 2
factorial(3) #should return 6
factorial(4) #should return 24
factorial(5) #should return 120
factorial(6) #should return 720
factorial(7) #should return 5040
