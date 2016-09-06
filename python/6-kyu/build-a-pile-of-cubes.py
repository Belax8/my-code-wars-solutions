# Rules
"""
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

Examples:

findNb(1071225) --> 45
findNb(91716553919377) --> -1
"""


# My Code
def find_nb(m):
    num = 0
    n = 1

    while num < m:
        num += pow(n,3)
        n += 1

    if num == m:
        return n - 1
    else:
        return -1


# Tests
find_nb(4183059834009) # should return 2022
find_nb(24723578342962) # should return -1
find_nb(135440716410000) # should return 4824
find_nb(40539911473216) # should return 3568
find_nb(26825883955641) # should return 3218
