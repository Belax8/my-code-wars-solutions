//Rules
/*
BACKGROUND:

Jacob recently decided to get healthy and lose some weight. He did a lot of reading and research and after focusing on steady exercise and a healthy diet for several months, was able to shed over 50 pounds! Now he wants to share his success, and has decided to tell his friends and family how much weight they could expect to lose if they used the same plan he followed.

Lots of people are really excited about Jacob's program and they want to know how much weight they would lose if they followed his plan. Unfortunately, he's really bad at math, so he's turned to you to help write a program that will calculate the expected weight loss for a particular person, given their weight and how long they think they want to continue the plan.

TECHNICAL DETAILS:

Jacob's weight loss protocol, if followed closely, yields loss according to a simple formulae, depending on gender. Men can expect to lose 1.5% of their current body weight each week they stay on plan. Women can expect to lose 1.2%. (Children are advised to eat whatever they want, and make sure to play outside as much as they can!)

TASK:

Write a function that takes as input:

- The person's gender ('M' or 'F');
- Their current weight (in pounds);
- How long they want to stay true to the protocol (in weeks);
and then returns the expected weight at the end of the program.

NOTES:

Weights (both input and output) should be decimals, rounded to the nearest tenth. Duration (input) should be a whole number (integer). If it is not, the function should round to the nearest whole number. When doing input parameter validity checks, evaluate them in order or your code will not pass final tests.
*/


//My Code
function loseWeight(gender, weight, duration){
  var percent;
  if(gender === "M") {
    percent = .015;
  }
  else if(gender === "F") {
    percent = .012;
  }
  else {
    return "Invalid gender";
  }

  if(weight <= 0) {
    return "Invalid weight";
  }
  else if(duration <= 0) {
    return "Invalid duration";
  }
  else {
    var answer = weight;
    for(var i = 0; i < duration; i++) {
      answer = answer - (answer * percent);
    }
    return Math.round(answer * 10) / 10;
  }

}


//Tests
loseWeight('K', 200, 10); //should return 'Invalid gender'
loseWeight('M', 0, 10); //should return 'Invalid weight'
loseWeight('F', 160, 0); //should return 'Invalid duration'
loseWeight('F', 160, -10); //should return 'Invalid duration'
loseWeight('M', 250, 5); //should return 231.8
loseWeight('F', 190, 8); //should return 172.5
loseWeight('M', 405, 12); //should return 337.8
loseWeight('F', 130, 7); //should return 119.5
