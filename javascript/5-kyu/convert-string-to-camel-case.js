//Rules
/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior")

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")
```c++ // returns "theStealthWarrior" to_camel_case("the-stealth-warrior")

// returns "TheStealthWarrior" to_camel_case("The_Stealth_Warrior") ```
*/


//My Code
function toCamelCase(str){
  var myStr = str.replace(/[-_]/g,' ');
  var answer = myStr.split(' ')[0];

  for(let i = 1; i < myStr.split(' ').length; i++) {
    let camel = myStr.split(' ')[i];
    camel = camel.charAt(0).toUpperCase() + camel.slice(1);
    answer += camel;
  }

  return answer;
}


//Tests
toCamelCase('this is cool'); //should return 'thisIsCool'
toCamelCase('this-is-cool'); //should return 'thisIsCool'
toCamelCase('this_is_cool'); //should return 'thisIsCool'
