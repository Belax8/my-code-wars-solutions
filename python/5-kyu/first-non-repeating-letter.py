# Rules
"""
Write a function named firstNonRepeatingCharacter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return the empty string ("").
"""


# My Code
def first_non_repeating_letter(string):
    # Variables
    lower_string = string.lower()
    i = 0
    # Find the first non-repeating letter
    while i < len(lower_string):
        array = [j for j, ltr in enumerate(lower_string) if ltr == lower_string[i]]
        if len(array) <= 1:
            return string[i]
        i += 1
    # Else return an empty string
    return ''


# Tests
first_non_repeating_letter('a') # should return 'a'
first_non_repeating_letter('stress') # should return 't'
first_non_repeating_letter('moonmen') # should return 'e'
first_non_repeating_letter('') # should return ''
first_non_repeating_letter('abba') # should return ''
first_non_repeating_letter('aa') # should return ''
first_non_repeating_letter('~><#~><') # should return '#'
first_non_repeating_letter('hello world, eh?') # should return 'w'
first_non_repeating_letter('sTreSS') # should return 'T'
first_non_repeating_letter('Go hang a salami, I\'m a lasagna hog!') # should return ','
