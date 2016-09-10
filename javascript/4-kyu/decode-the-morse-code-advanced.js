//Rules
/*
In this kata you have to write a Morse code decoder for wired electrical telegraph.
Electric telegraph is operated on a 2-wire line with a key that, when pressed, connects the wires together, which can be detected on a remote station. The Morse code encodes every character being transmitted as a sequence of "dots" (short presses on the key) and "dashes" (long presses on the key).

When transmitting the Morse code, the international standard specifies that:

"Dot" – is 1 time unit long.
"Dash" – is 3 time units long.
Pause between dots and dashes in a character – is 1 time unit long.
Pause between characters inside a word – is 3 time units long.
Pause between words – is 7 time units long.
However, the standard does not specify how long that "time unit" is. And in fact different operators would transmit at different speed. An amature person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.

For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, and if the line is connected (the key at the remote station is down), 1 is recorded, and if the line is not connected (remote key is up), 0 is recorded. After the message is fully received, it gets to you for decoding as a string containing only symbols 0 and 1.

For example, the message HEY JUDE, that is ···· · −·−− ·−−− ··− −·· · may be received as follows:

1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011

As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".

That said, your task is to implement two functions:

Function decodeBits(bits), that should find out the transmission rate of the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them. Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot.
Function decodeMorse(morseCode), that would take the output of the previous function and return a human-readable string.
The Morse code table is preloaded for you as MORSE_CODE dictionary (MorseCode class for Java), feel free to use it.

All the test strings would be valid to the point that they could be reliably decoded as described above, so you may skip checking for errors and exceptions, just do your best in figuring out what the message is!

Good luck!
*/


//My Code
function decodeBits(bits) {
  //Get rid of all the '0' at the beginning and end
  while(bits[0] === '0') {
    bits = bits.substring(1);
  }
  while(bits[bits.length-1] === '0') {
    bits = bits.substring(0,bits.length-1);
  }

  //Variables
  let isOn = bits[0] === '1';
  let string = '';
  let array = [];
  let answer = '';

  //Split up the 1s from the 0s
  for(let i = 0; i < bits.length; i++) {
    let currentIsOn = bits[i] === '1';
    if(isOn === currentIsOn) {
      string += bits[i];
    } else {
      isOn = currentIsOn;
      array.push(string);
      string = bits[i];
    }
  }
  //Push whatever is left
  array.push(string);

  //Edge case
  if(array.length === 1) {
    return array[0][0] === '1' ? '.' : '';
  }

  //Decode
  for(let j = 0; j < array.length; j++) {
    if(array[j][0] === '1' && array[j].length % 3 === 0) {
      answer += '-';
    } else if(array[j][0] === '1') {
      answer += '.';
    } else if(array[j][0] === '0' && array[j].length % 7 === 0 ) {
      answer += '   ';
    } else if(array[j][0] === '0' && array[j].length % 3 === 0) {
      answer += ' ';
    } else if(array[j][0] === '0') {
      answer += '';
    } else {
      answer += '';
    }
  }

  return answer;
}


function decodeMorse(morseCode) {
  //Variables
  let array = morseCode.split(' ');
  let answer = '';

  //Edge cases
  while(array[0] === '') {
    array.shift();
  }
  while(array[array.length-1] === '') {
    array.pop();
  }

  //Decode
  for(let i = 0; i < array.length; i++) {
    if(array[i] === '' && array[i-1] === '') {
      answer += ' ';
    } else if(array[i] === '') {
      //Do nothing because for every space there are two ''
    } else {
      answer += MORSE_CODE[array[i]];
    }
  }

  return answer;
}

//Tests
let decodedBits = decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'); //should return '.... . -.--   .--- ..- -.. .'
decodeMorse(decodedBits); //should return 'HEY JUDE'
