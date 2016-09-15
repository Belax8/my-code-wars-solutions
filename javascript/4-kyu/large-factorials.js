//Rules
/*
In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None. For positive numbers a full length number is expected for example, return 25! = '15511210043330985984000000' as a String!

Note: 0! is always equal to 1. Negative values should return null;
*/


//My Code
function factorial(n) {
  //Setup
  let result = [1]; //result array base 10

  //Compute
  for (let iteration = 1; iteration <= n; iteration++) {

    //Setup the array to store the multiplication result
    const multiplyResult = [];

    //Loop through digits in iteration value
    for (let digitIndex = 0; digitIndex <= Math.log10(iteration); digitIndex++) {

      //Get the digit, starting with lowest power of 10
      const digit = Math.floor((iteration % Math.pow(10,digitIndex + 1)) / Math.pow(10,digitIndex));

      //Multiply that digit with the result
      let carryOver = 0;
      for (let multiplyIndex = 0; multiplyIndex < result.length; multiplyIndex++) {

        //Multiply the digit by the result and add onto the multiply result array
        const currentValue = multiplyResult[digitIndex + multiplyIndex] || 0;
        const addValue = digit * result[multiplyIndex] + carryOver;
        multiplyResult[digitIndex + multiplyIndex] = currentValue + addValue;

        //Get carry over for next iteration
        if (multiplyResult[digitIndex + multiplyIndex] >= 10) {
          carryOver = Math.floor((multiplyResult[digitIndex + multiplyIndex]) / 10);
          multiplyResult[digitIndex + multiplyIndex] = multiplyResult[digitIndex + multiplyIndex] % 10;
        } else {
          carryOver = 0;
        }
      }

      //If carry over defined, add to end of array
      if (carryOver > 0) {
        multiplyResult.push(carryOver);
      }
    }

    //Assign the multiplication result to the result array
    result = multiplyResult;
  }

  //Return
  return result.reverse().join('');
}

//Tests
factorial(0); //should return '1'
factorial(1); //should return '1'
factorial(5); //should return '120'
factorial(9); //should return '362880'
factorial(15); //should return '1307674368000'
factorial(25); //should return '15511210043330985984000000'
factorial(100); //should return '93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000'
