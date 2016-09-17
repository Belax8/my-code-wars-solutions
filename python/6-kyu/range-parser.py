# Rules
"""
In this Kata you are to implement a function that parses a string which is composed from tokens of the form 'n1-n2,n3,n4-n5:n6' where 'nX' is a positive integer. Each token represent a different range:

'n1-n2' represents the range n1 to n2 (inclusive in both ends). 'n3' represents the single integer n3. 'n4-n5:n6' represents the range n4 to n5 (inclusive in both ends) but only includes every other n6 integer.

Notes:
1. The input string doesn't not have to include all the token types.
2. All integers are assumed to be positive.
3. Tokens may be separated by ',', ', ' or ,.

Some examples:

'1-10,14, 20-25:2' -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 20, 22, 24]

'5-10' -> [5, 6, 7, 8, 9, 10]

'2' -> [2]

The output should be a list of integers.
"""


# My Code
def range_parser(string):
    array_one = string.replace(', ', ',').split(',')
    answer = []

    for i in array_one:
        if i.find('-') > 0:
            if i.find(':') > 0:
                range = i.split('-')
                start = int(range[0])
                end = int(range[1].split(':')[0])
                increment = int(range[1].split(':')[1])
                while start <= end:
                    answer.append(start)
                    start += increment
            else:
                range = i.split('-')
                num = int(range[0])
                while num <= int(range[1]):
                    answer.append(num)
                    num += 1
        else:
            answer.append(int(i))

    return answer


# Tests
range_parser('1-10,14, 20-25:2') #should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 20, 22, 24]
range_parser('5-10') #should return [5, 6, 7, 8, 9, 10]
range_parser('2') #should return [2]
