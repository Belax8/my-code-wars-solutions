//Rules
/*
Task:

Mr. despair wants to jump off Dutch act, So he came to the top of a building.

Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

Input: floor, The height of the building (floor)

Output: a string, The voice of despair(When jumping Dutch act)
Example:

sc(2) should return "Aa~ Pa! Aa!"

It means:

  Mr. despair jumped from the 2 floor, the voice is "Aa~"
  He fell on the ground, the voice is "Pa!"
  He did not die immediately, and the final voice was "Aa!"
sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

if floor<=1, Mr. despair is safe, return ""

The final advice

Just play in this kata, Don't experiment in real life ;-)
*/


//My Code
function sc(floor){
  var array = [];
  if(floor > 6) {
    for(var i = 0; i < floor -1; i++) {
      array.push("Aa~");
    }
    array.push("Pa!");
  }
  else if(floor <= 1) {
    //do nothing to the array
  }
  else {
    for(var i = 0; i < floor -1; i++) {
      array.push("Aa~");
    }
    array.push("Pa!");
    array.push("Aa!");
  }

  return array.length > 1 ? array.join(" ") : "";
}


//Tests
sc(2); //should return "Aa~ Pa! Aa!"
sc(6); //should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"
sc(7); //should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"
sc(10); //should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"
sc(1); //should return ""
sc(-1); //should return ""
