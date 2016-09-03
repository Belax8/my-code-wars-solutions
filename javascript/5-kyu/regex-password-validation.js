//Rules
/*
You need to write regex that will validate a password to make sure it meets the follwing criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.
*/


//My Code
function validate(password) {
  let regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[\W_\x7B-\xFF]).{6,}/;
  return regEx.test(password);
}


//Tests
validate('djI38D55'); //should return true
validate('a2.d412'); //should return false
validate('JHD5FJ53'); //should return false
validate('!fdjn345'); //should return false
validate('jfkdfj3j'); //should return false
validate('123'); //should return false
validate('abc'); //should return false
validate('Password123'); //should return true
validate('fjd3IR9.;'); //should return false
