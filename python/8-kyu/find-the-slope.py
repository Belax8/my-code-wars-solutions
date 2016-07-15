# Rules
"""
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

Assume that [a,b,c,d] and the answer are all integers (no floating numbers!).
"""


# My Code
def find_slope(points):
    rise = points[1] - points[3]
    run = points[0] - points[2]
    if run == 0:
        return 'undefined'
    else:
        return str(int(round(rise/run)))


# Tests
find_slope([19,3,20,3]) #should return "0"
find_slope([-7,2,-7,4]) #should return "undefined"
find_slope([10,50,30,150]) #should return "5"
find_slope([10,20,20,80]) #should return "6"
find_slope([-10,6,-10,3]) #should return "undefined"
