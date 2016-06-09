//Rules
/*
Bob drinks too much, and he gets in trouble for it a lot. He drinks so much, in fact, that he has broken the local law enforcement's breathalizer with his alcoholic breath! Bob feels simply aweful, so he wants to make up for it by creating a function that will calculate his blood-alcohol level for them. Unfortunately, Bob has gotten too inebriated to do any programming today, so he needs your help!

He did manage to research the formula for blood-alcohol content before getting too drunk, which he describes below.

BAC calculator Formula:

BAC% = (A × 5.14 / W × r) - .015 × H

A: Total alcohol consumed, in ounces (oz)
W: Body weight, in pounds (lbs)
r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
H: Time passed since drinking, in hours
( Sources: http://www.endmemo.com/medical/bac.php, http://www.teamdui.com/bac-widmarks-formula/ )

Alcohol consumed will be passed as a drinks object with two properties: ounces (the total volume of beverage consumed in ounces), and abv (the % of alcohol by volume of the beverage as a floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). For simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.

The gender will be passed as a string, either "male" or "female".

Output must be returned as a number data-type, greater than or equal to 0, with up to 4 decimal places. No error handling will be required.

Using these parameters, create the function that will calculate Bob's and other partier's BAC.
*/


//My Code
function bloodAlcoholContent(drinks, weight, sex, time){
  var gender = sex === 'male' ? 0.73 : 0.66;
  var bac = ((drinks.ounces * drinks.abv) * 5.14 / weight * gender) - 0.015 * time;
  return Math.round(bac * 10000) / 10000;
}


//Tests
bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1); //should return 0.0837
bloodAlcoholContent({ounces:180, abv:0.05}, 160,'female', 1); //should return 0.1758
bloodAlcoholContent({ounces:50, abv:0.14}, 250,'male', 3); //should return 0.0601
bloodAlcoholContent({ounces:20, abv:0.4}, 100,'female', 2); //should return 0.2414
