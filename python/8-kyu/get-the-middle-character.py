# Rules
"""
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
Input

A word (string) of length 0 < str < 1000

Output

The middle character(s) of the word represented as a string.
"""


# My Code
def get_middle(s):
    if len(s) % 2 == 0:
        while len(s) > 2:
            s = s[1:-1]
        return s
    else:
        while len(s) > 1:
            s = s[1:-1]
        return s


# Tests
get_middle("test") #should return "es"
get_middle("testing") #should return "t"
get_middle("middle") #should return "dd"
get_middle("A") #should return "A"
get_middle("of") #should return "of"
