//Rules
/*
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, commands played draw."
*/


//My Code
function uefaEuro2016(commands, scores){
  var winner = "";
  if(scores[0] > scores[1]) {
    winner = commands[0] + " won!";
  }
  else if(scores[1] > scores[0]) {
    winner = commands[1] + " won!";
  }
  else if(scores[0] === scores[1]) {
    winner = "commands played draw.";
  }

  return "At match " + commands[0] + " - " + commands[1] + ", " + winner;
}


//Tests
uefaEuro2016(['Germany', 'Ukraine'], [2, 0]); //should return "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'], [0, 2]); //should return "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'], [1, 1]); //should return "At match Portugal - Iceland, commands played draw."
