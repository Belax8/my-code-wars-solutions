# Rules
"""
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
"""


# My Code
def sort_by_length(arr):
    # Setup
    max_length = 0
    for i in arr:
        if len(i) > max_length:
            max_length = len(i)

    # Sort
    answer = []
    j = 0
    while j <= max_length:
        for m in arr:
            if len(m) == j:
                answer.append(m)
        j += 1
    return answer


# Tests
sort_by_length(["beg", "life", "i", "to"]) # should return ["i", "to", "beg", "life"]
sort_by_length(["", "moderately", "brains", "pizza"]) # should return ["", "pizza", "brains", "moderately"]
sort_by_length(["longer", "longest", "short"]) # should return ["short", "longer", "longest"]
sort_by_length(["dog", "food", "a", "of"]) # should return ["a", "of", "dog", "food"]
sort_by_length(["", "dictionary", "eloquent", "bees"]) # should return ["", "bees", "eloquent", "dictionary"]
sort_by_length(["a longer sentence", "the longest sentence", "a short sentence"]) # should return ["a short sentence", "a longer sentence", "the longest sentence"]
