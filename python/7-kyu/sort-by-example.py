# Rules
"""
Given an Array and an Example-Array to sort to, write a function that sorts the Array following the Example-Array.

Assume Example Array catalogs all elements possibly seen in the input Array. However, the input Array does not necessarily have to have all elements seen in the Example.

Example:

Arr: [1,3,4,4,4,4,5]

Example Arr: [4,1,2,3,5]

Result: [4,4,4,4,1,3,5]
"""


# My Code
def example_sort(arr, example_arr):
    answer = []
    for i in example_arr:
        for j in arr:
            if i == j:
                answer.append(j)
    return answer


# Tests
example_sort([1,2,3,4,5],[2,3,4,1,5]) #should return [2,3,4,1,5])
example_sort([1,2,3,3,3,4,5],[2,3,4,1,5]) #should return [2,3,3,3,4,1,5])
example_sort([1,2,3,3,3,5],[2,3,4,1,5]) #should return [2,3,3,3,1,5])
example_sort([1,2,3,3,3,5],[3,4,5,6,9,11,12,13,1,7,8,2,10]) #should return [3,3,3,5,1,2])
example_sort(["a","a","b","f","d","a"],["c","a","d","b","e","f"]) #should return ["a","a","a","d","b","f"])
example_sort(["Alice","Bryan","Chad","Darrell","Ellie","Fiona"],["Alice","Bryan","Chad","Darrell","Ellie","Fiona"]) #should return ["Alice","Bryan","Chad","Darrell","Ellie","Fiona"])
