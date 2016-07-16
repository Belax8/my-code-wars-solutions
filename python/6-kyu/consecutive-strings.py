# Rules
"""
You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
"""


# My Code
def longest_consec(strarr, k):
    longest = [0,0]
    answer = '';

    if len(strarr) == 0 or k > len(strarr) or k <= 0:
        return answer
    else:
        #find the longest set of words
        i = 0
        while i < len(strarr) - k + 1:
            string = ''
            j = 0
            while j < k:
                string += strarr[i + j]
                j += 1
            if len(string) > longest[0]:
                longest[0] = len(string)
                longest[1] = i
            i += 1
        #save longest set of words to answer
        m = 0
        while m < k:
            answer += strarr[longest[1] + m]
            m += 1
        return answer


# Tests
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) #should return "abigailtheta"
longest_consec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) #should return "oocccffuucccjjjkkkjyyyeehh"
longest_consec([], 3) #should return ""
longest_consec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) #should return "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
longest_consec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) #should return "wlwsasphmxxowiaxujylentrklctozmymu"
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) #should return ""
longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) #should return "ixoyx3452zzzzzzzzzzzz"
longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) #should return ""
longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) #should return ""
