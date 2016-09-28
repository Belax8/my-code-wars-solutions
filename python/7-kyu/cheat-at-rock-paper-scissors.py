# Rules
"""
You seem to have the worst luck at rock, paper, scissors! Everyday you play against your friends, but never win. You want a taste of victory!

In this kata you need to define r_p_s_cheat() that takes an argument, either 'rock', 'paper', or 'scissors' and returns your counter to win!

But there's a catch! Your friends know how terrible you are at rock, paper, scissors, and if you win all of the time, then they'll see through your deception!

You need r_p_s_cheat to win 88-92% of the time and lose 8-12% of the time! In other words, you should never tie!

Note: The testing will check to see that this condition is fulfilled!

If you believe your solution will work, but doesn't on the first try, submit again!
"""


# My Code
from random import randint

def r_p_s_cheat(choice):
    # Setup
    random_num = randint(0,100)
    will_win = True
    if random_num >= 90:
        will_win = False

    # Results
    if choice == 'rock' and will_win or choice == 'scissors' and not will_win:
        return 'paper'
    elif choice == 'paper' and will_win or choice == 'rock' and not will_win:
        return 'scissors'
    elif choice == 'scissors' and will_win or choice == 'paper' and not will_win:
        return 'rock'


# Tests
results = []
for i in xrange(1000):
    results.append(r_p_s_cheat("rock"))

results.count("rock") # should equal 0
results.count("scissors") # should be less than 120
results.count("paper") # should be less than 920
