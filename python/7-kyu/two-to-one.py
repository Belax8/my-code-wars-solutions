# Rules
"""
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
"""


# My Code
def longest(s1, s2):
    letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    answer = ''

    for i in letters:
        if i in s1 or i in s2:
            answer += i

    return answer
    

# Tests
longest("aretheyhere", "yestheyarehere") # should return "aehrsty"
longest("loopingisfunbutdangerous", "lessdangerousthancoding") # should return "abcdefghilnoprstu"
longest("inmanylanguages", "theresapairoffunctions") # should return "acefghilmnoprstuy"
