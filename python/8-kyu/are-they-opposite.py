# Rules
"""
Task

Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false.
The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string

Some examples:

isOpposite("ab","AB") should return true;
isOpposite("aB","Ab") should return true;
isOpposite("aBcd","AbCD") should return true;
isOpposite("AB","Ab") should return false;
isOpposite("","") should return false;
"""


# My Code
def is_opposite(s1,s2):
  if len(s1) < 1:
      return False;

  i = 0
  num = 0
  while i < len(s1):
      if s1[i] == s1[i].upper() and s2[i] == s2[i].lower() or s1[i] == s1[i].lower() and s2[i] == s2[i].upper():
          # Do nothing
          num += 1
      else:
          return False
      i += 1

  return True


# Tests
is_opposite("ab","AB") # should return True
is_opposite("aB","Ab") # should return True
is_opposite("aBcd","AbCD") # should return True
is_opposite("AB","Ab") # should return False
is_opposite("","") # should return False
