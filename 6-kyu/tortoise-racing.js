//Rules
/*
Description:

Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A speed, integer > 0) and v2 (B speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [h, mn, s] where h, mn, s is the time needed in hours, minutes and seconds (don't worry for fractions of second). If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++.

Examples:

race(720, 850, 70) => [0, 32, 18]
race(80, 91, 37) => [3, 21, 49]
Note: you can see some other examples in "Your test cases".
*/


//My Code
function race(aSpeed, bSpeed, lead) {
  var time;
  var hour = 0;
  var min = 0;
  var sec = 0;

  if(aSpeed >= bSpeed) {
    return null;
  }
  else {
    time = Math.floor( (lead / (bSpeed - aSpeed)) * 60 * 60);
    do {
      if(time >= 3600) {
        hour += 1;
        time -= 3600;
      }
      else if(time >= 60) {
        min += 1;
        time -= 60;
      }
      else {
        sec += 1;
        time -= 1;
      }
    } while(time > 0);

    return [hour, min, sec];
  }
}


//Tests
race(720, 850, 70); //should return [0, 32, 18]
race(80, 91, 37); //should return [3, 21, 49]
race(120, 110, 23); //should return null
race(80, 100, 40); //should return [2, 0, 0]
race(100, 100, 72); //should return null
