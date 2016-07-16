# Rules
"""
The four bases found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

In genetics, GC-content is the percentage of Guanine (G) and Cytosine (C) bases on a DNA molecule that are either guanine or cytosine.

Given a DNA sequence (a string) return the GC-content in percent, rounded up to 2 decimal digits for Python, not rounded in all other languages.

For more information about GC-content you can take a look to wikipedia GC-content.

For example: the GC-content of the following DNA sequence is 50%: "AAATTTCCCGGG".
"""


# My Code
def gc_content(seq):
    array = list(seq.upper())
    count = 0
    if len(seq) <= 0:
        return 0.0
    i = 0
    while i < len(array):
        if array[i] == 'G' or array[i] == 'C':
            count += 1
        i += 1
    return round((count / float(len(array)) ) * 10000) / 100
    

# Tests
gc_content('') #should return 0.0
gc_content('A') #should return 0.0
gc_content('C') #should return 100.0
gc_content('CA') #should return 50.0
