// Rules
/* 
You have just boarded a train when your friend texts you to ask how long it will take your train to reach the stop where they're waiting for you.

Assuming that you know the distance in km and the train's average speed in km/h, let your friend know how long it will take the train to reach their stop, rounding the time to the nearest half hour.

As you are sending your reply via text, you should specify the time using numbers rather than words.

For example, given a distance of 80 km and an average speed of 20 km/h:

reachDestination(80, 20);

Your function should return:

'The train will be there in 4 hours.'

Hint: Keep in mind that the returned sentence needs to follow basic grammatical rules.
*/


// My Code
function reachDestination(distance, speed) {
  var num = distance / speed;
  if (num - Math.floor(num) < 0.25) {
    num = Math.floor(num);
  } else if ( num - Math.floor(num) > 0.24 && num - Math.floor(num) < 0.75) {
    num = Math.floor(num) + 0.5;
  } else if ( num - Math.floor(num) > 0.75) {
    num = Math.ceil(num); 
  }
  var time = num === 1 ? ' hour.' : ' hours.';
  return 'The train will be there in ' + num + time;
}


// Tests
reachDestination(5,10); // Should return 'The train will be there in 0.5 hours.'
reachDestination(80,20); // Should return 'The train will be there in 4 hours.'
reachDestination(80,80); // Should return 'The train will be there in 1 hour.'
