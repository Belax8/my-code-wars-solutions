# Rules
"""
We want to generate a function that computes the series starting from 0 and ending untill the given number following the sequence:

0 1 3 6 10 15 21 28 36 45 55 ....

Wich is created by

0, 0+1, 0+1+2, 0+1+2+3, 0+1+2+3+4, 0+1+2+3+4+5, 0+1+2+3+4+5+6, 0+1+2+3+4+5+6+7 etc..

Input:

LastNumber

Output:

series and result

Example:

Input:

> 6
Output:

0+1+2+3+4+5+6 = 21
Input:

> -15
Output:

-15<0
Input:

> 0
Output:

0=0
"""


# My Code
def show_sequence(n):
    # Edge cases
    if n == 0:
        return '0=0'
    elif n < 0:
        return str(n) + '<0'

    # Variables
    num = 0
    string = ''
    answer = 0

    # Adding all the numbers
    while num <= n:
        string += str(num) + '+'
        answer += num
        num += 1

    # Write the answer
    string = string[:-1]
    string += ' = ' + str(answer)

    return string


# Tests
show_sequence(6) # should return "0+1+2+3+4+5+6 = 21"
show_sequence(7) # should return "0+1+2+3+4+5+6+7 = 28"
show_sequence(0) # should return "0=0"
show_sequence(-1) # should return "-1<0"
show_sequence(-10) # should return "-10<0"
