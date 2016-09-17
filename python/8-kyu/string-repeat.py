# Rules
"""
Write function repeatStr which repeats n times given string.
"""


# My Code
def repeat_str(repeat, string):
    str = ''
    i = 0
    while i < repeat:
        str += string
        i += 1
    return str


# Tests
repeat_str(4, 'a') #should return 'aaaa'
repeat_str(3, 'hello ') #should return 'hello hello hello '
repeat_str(2, 'abc') #should return 'abcabc'
