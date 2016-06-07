//Rules
/*
Write a function, calculateTip(amount, rating) which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive. If an unrecognised rating is input, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
Because you're a nice person, you always round up the tip, regardless of the service.
*/


//My Code
function calculateTip(amount, rating) {

  var tip;

  switch(rating.toLowerCase()) {
    case "terrible":
      tip = 0;
      break;
    case "poor":
      tip = .05;
      break;
    case "good":
      tip = .1;
      break;
    case "great":
      tip = .15;
      break;
    case "excellent":
      tip = .2;
      break;
    default:
      tip = false;
      break;
  }

  return tip === false? "Rating not recognised": Math.ceil(amount * tip);
}


//Tests
calculateTip(20, "Excellent"); //should return 4
calculateTip(26.95, "good"); //should return 3
calculateTip(1.6785994388792491, "excellent"); //should return 1
calculateTip(1564.2108227408742, "GREAT"); //should return 235
calculateTip(20, "dfsjkfh"); //should return "Rating not recognised"
