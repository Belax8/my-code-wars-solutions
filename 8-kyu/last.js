//Rules
/*
Find the last element of a list.

Example:

last( [1,2,3,4] ) // => 4
last( "xyz" )     // => z
last( 1,2,3,4 )   // => 4
In javascript and CoffeeScript a list will be an array, a string or the list of arguments.
*/


//My Code
function last(list){

  if(arguments.length > 1) {
    return arguments[arguments.length - 1];
  }
  else if(Array.isArray(list)) {
    return list[list.length - 1];
  }
  else if(typeof list === "string") {
    return list.split("")[list.length - 1];
  }
  else if(typeof list === "number") {
    return list;
  }

}


//Tests
last([1,2,3,4,5]); //should return 5
last("abcde"); //should return "e"
last(1,"b",3,"d",5); //should return 5
last(1,3,5,"b","z","c","t"); //should return "t"
