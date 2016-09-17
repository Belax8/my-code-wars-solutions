# Rules
"""
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
"""


# My Code
def isValidWalk(walk):
    direction = { 'horizontal': 0, 'vertical': 0 }
    # Edge case (length of 10 means 10 mins)
    if len(walk) != 10:
        return False;
    # Walk the path and see where you end up
    for i in walk:
        if i == 'n':
            direction['horizontal'] += 1
        elif i == 's':
            direction['horizontal'] -= 1
        elif i == 'e':
            direction['vertical'] += 1
        elif i == 'w':
            direction['vertical'] -= 1
    # Test your current location
    if direction['horizontal'] == 0 and direction['vertical'] == 0:
        return True;
    else:
        return False;


# Rules
isValidWalk(['w', 'e']) #should return False
isValidWalk(['n','e','n','e','n','s','w','s','w','s']) #should return True
