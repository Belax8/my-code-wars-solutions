# Rules
"""
Take a number: 56789. Rotate left, you get 67895.

Keep the first digit in place and rotate left the other digits: 68957.

Keep the first two digits in place and rotate the other ones: 68579.

Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

You have the following sequence of numbers:

56789 -> 67895 -> 68957 -> 68579 -> 68597

and you must return the greatest: 68957.

Calling this function max_rot (or maxRot or ... depending on the language)

max_rot(56789) should return 68957
"""


# My COde
def max_rot(n):
    # Variables
    nums = list(str(n))
    max = n
    i = 0
    # Rotate
    while i < len(nums) - 1:
        print(nums)
        end = nums[i]
        del nums[i]
        nums.append(end)
        if int(''.join(nums)) > max:
            max = int(''.join(nums))
        i += 1
    # Return
    return max


# Tests
max_rot(38458215) # should return 85821534
max_rot(195881031) # should return 988103115
max_rot(896219342) # should return 962193428
max_rot(69418307) # should return 94183076
