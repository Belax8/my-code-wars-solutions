# Rules
"""
Number of people in the bus

There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided a list (or array in JS) of integer array. Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item).

The first integer array has 0 number in the second item, since the bus is empty in the first bus stop.

Your task is to return number of people in the bus after the last bus station. Take a look on the test cases :)

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
"""


# My Code
def number(bus_stops):
    passengers = 0
    i = 0
    while i < len(bus_stops):
        passengers += bus_stops[i][0]
        passengers -= bus_stops[i][1]
        i += 1
    return passengers
    

# Tests
number([[10,0],[3,5],[5,8]]) #should return 5
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) #should return 17
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) #should return 21
