//Rules
/*
Two samurai generals are discussing dinner plans after a battle, but they can't seem to agree.

The discussion gets heated and you are cannot risk favoring either of them as this might damage your political standing with either of the two clans the samurai generals belong to. Thus, the only thing left to do is find what the common ground of what they are saying is.

Compare the proposals using the function commonGround(string a, string b) that outputs a string containing the words in string a that also occur in string b.

Each word in the resulting string shall occur once, and the order of the words follow the order of the first occurence of each word in the second string.

If they are saying nothing in common, kill both samurai and blame a ninja. (output "death")
*/


//My Code
function commonGround(a, b){
  var result = "not defined";
  if(a.indexOf(b) >= 0) {
    result = b;
  }
  else if(b.indexOf(a) >= 0) {
    result = a;
  }
  else {
    var smaller = a.split(" ");
    var larger = b.split(" ");
    for(var i = 0; i < larger.length; i++) {
      for(var j = 0; j < smaller.length; j++) {
        if(larger[i].indexOf(smaller[j]) >= 0 && smaller[j].indexOf(larger[i]) >= 0) {
          result = smaller[j];
          break;
        }
      }
    }
    if(result === "not defined") {
      result = "death";
    }
  }
  return result;
}

//Tests
commonGround("eat chicken", "eat chicken and rice"); //should return 'eat chicken'
commonGround("eat a burger and drink a coke", "drink a coke"); //should return 'drink a coke'
commonGround("i like turtles", "what are you talking about"); //should return 'death'
commonGround("LHKJIsD DrDqqxC", "LHKJIsD oHznsFy"); //should return 'LHKJIsD'
