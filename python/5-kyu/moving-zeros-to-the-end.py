# Rules
"""
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

move_zeros([false,1,0,1,2,0,1,3,"a"]) # returns[false,1,1,2,1,3,"a",0,0]
"""


# My Code
def move_zeros(arr):
    count = 0
    array = []

    for i in arr:
        if i is False:
            array.append(False)
        elif i == 0:
            count += 1
        else:
            array.append(i)

    while count > 0:
        array.append(0)
        count -= 1

    return array


# Tests
move_zeros([1,2,0,1,0,1,0,3,0,1]) # should return [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
move_zeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]) # should return [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
move_zeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9]) # should return ["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
move_zeros(["a",0,0,"b",None,"c","d",0,1,False,0,1,0,3,[],0,1,9,0,0,{},0,0,9]) # should return ["a","b",None,"c","d",1,False,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
move_zeros([0,1,None,2,False,1,0]) # should return [1,None,2,False,1,0,0]
move_zeros(["a","b"]) # should return ["a","b"]
move_zeros(["a"]) # should return ["a"]
move_zeros([0,0]) # should return [0,0]
move_zeros([0]) # should return [0]
move_zeros([]) # should return []
