# Rules
"""
Your task is to make two functions, max and min that take a vector of integers list as input and outputs, respectively, the largest and lowest number in that vector.

Examples

max([4,6,2,1,9,63,-134,566]) returns 566
min([-52, 56, 30, 29, -54, 0, -110]) returns -110
max([5]) returns 5
min([42, 54, 65, 87, 0]) returns 0
Notes

You may consider that there will not be any empty vectors.
"""


# My Code
def min(arr):
    minNum = 999999999999999999999999999999999999999
    for i in arr:
        if i < minNum:
            minNum = i
    return minNum

def max(arr):
    maxNum = -9999999999999999999999999999999999999999
    for j in arr:
        if j > maxNum:
            maxNum = j
    return maxNum


# Tests
min([-52, 56, 30, 29, -54, 0, -110]) #should return -110
min([42, 54, 65, 87, 0]) #should return 0
min([1, 2, 3, 4, 5, 10]) #should return 1
min([-1, -2, -3, -4, -5, -10]) #should return -10
min([9]) #should return 9

max([-52, 56, 30, 29, -54, 0, -110]) #should return 56
max([4,6,2,1,9,63,-134,566]) #should return 566
max([5]) #should return 5
max([534,43,2,1,3,4,5,5,443,443,555,555]) #should return 555
max([9]) #should return 9
