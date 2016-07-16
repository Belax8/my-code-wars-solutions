# Rules
"""
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
"""


# My Code
def solution(number):
    answer = 0
    i = 0
    while i < number:
        if i % 3 == 0 or i % 5 == 0:
            answer += i
        i += 1
    return answer


# Tests
solution(10) #should returns 23
solution(20) #should returns 78
solution(200) #should returns 9168
