//Rules
/*
Write a function getDrinkByProfession that receives as input parameter a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".
*/


//My Code
function getDrinkByProfession(param){
  switch(param.toLowerCase()) {
    case "jabroni":
     return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer"
  }
}


//Tests
getDrinkByProfession("jabrOni"); //should return "Patron Tequila"
getDrinkByProfession("scHOOl counselor"); //should return "Anything with Alcohol"
getDrinkByProfession("prOgramMer"); //should return "Hipster Craft Beer"
getDrinkByProfession("bike ganG member"); //should return "Moonshine"
getDrinkByProfession("poLiTiCian"); //should return "Your tax dollars"
getDrinkByProfession("rapper"); //should return "Cristal"
getDrinkByProfession("pundit"); //should return "Beer"
getDrinkByProfession("Pug"); //should return "Beer"
