//Rules
/*
Given n number of people in a room, calculate the probability that any two people in that room have the same birthday (assume 365 days every year = ignore leap year). Answers should be two decimals unless whole (0 or 1) eg 0.05
*/


//My Code
function calculateProbability(n){
  var prob = 1;
  for(var i = 0; i < n; i++) {
    prob = prob * ((365.0 - i) / 365.0);
  }
  return Math.round((1 - prob) * 100) / 100;
}


//Tests
calculateProbability(5); //should return 0.03
calculateProbability(1000); //should return 1
calculateProbability(22); //should return 0.48
calculateProbability(11); //should return 0.14
calculateProbability(50); //should return 0.97
calculateProbability(97); //should return 1
