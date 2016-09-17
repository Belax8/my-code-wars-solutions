# Rules
"""
You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.

Exercice

Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.

For example:

nextVersion("1.2.3") === "1.2.4";
nextVersion("0.9.9") === "1.0.0.";
nextVersion("1") === "2";
nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9";
nextVersion("9.9") === "10.0";
Rules

All numbers, except the first one, must not be greater than 10: if there are, you have to set them to 0 and increment the next number in sequence.

You can assume all tests inputs to be valid.
"""


# My Code
def next_version(version):
    nums = version.split('.')
    answer = []
    # Change them all to numbers
    nums = map(int, nums)
    # Next version
    nums[len(nums)-1] += 1
    # Update all numbers
    j = len(nums) - 1
    while j >= 0:
        if nums[j] >= 10 and j != 0:
            answer.append(0)
            nums[j-1] += 1
        else:
            answer.append(nums[j])
        j -= 1

    return '.'.join(str(i) for i in answer[::-1])


# Tests
next_version("1.2.3") #should return "1.2.4"
next_version("0.9.9") #should return "1.0.0"
next_version("1") #should return "2"
next_version("1.2.3.4.5.6.7.8") #should return "1.2.3.4.5.6.7.9"
next_version("9.9") #should return "10.0"
