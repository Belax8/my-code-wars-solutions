# Rules
"""
Write a function that takes an integer and returns an Array [A, B, C] where A is the number of multiples of 3 (but not 5) less than the given integer, B is the number of multiples of 5 (but not 3) less than the given integer and C is the number of multiples of 3 and 5 less than the given integer.

For example, solution(20) should return [5, 2, 1]
"""


# My Code
def solution(number):
    answer = [0,0,0]
    i = 1
    while i < number:
        if i % 3 == 0 and i % 5 == 0:
            answer[2] += 1
        elif i % 3 == 0:
            answer[0] += 1
        elif i % 5 == 0:
            answer[1] += 1
        i += 1
    return answer

# Tests
test.assert_equals((solution(20)), [5,2,1])
test.assert_equals((solution(2)), [0,0,0])
test.assert_equals((solution(30)), [8,4,1])
test.assert_equals((solution(300)), [80,40,19])
