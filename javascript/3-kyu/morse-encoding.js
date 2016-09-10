//Rules
/*
You are writing an encoder/decoder to convert between javascript strings and a binary representation of Morse code.

Each Morse code character is represented by a series of "dots" and "dashes". In binary, a dot is a single bit (1) and a dash is three bits (111). Between each dot or dash within a single character, we place a single zero bit. (I.e. "dot dash" would become 10111.) Separate characters are separated by three zero bits (000). Words are spearated by a single space, which is represented by 7 zero bits (0000000).

Note that space itself is not a character but is interpreted as the separater between words.


The first method Morse.encode will take a String representing the message and will return an array of signed 32-bit integers in big-endian order and in two's complement format. (Note: This is the standard format for numbers returned by JavaScript bitwise operators.) Since it is possible that the Morse encoded message will not align perfectly with the binary 32-bit numbers, all unused bits are to be padded with 0's.

The second method Morse.decode will take an array of numbers and return the String representation of the message.
*/


//My Code
var Morse = {};

Morse.encode = function(message){
  let bits32 = [2147483648, 1073741824, 536870912, 268435456, 134217728, 67108864, 33554432, 16777216, 8388608, 4194304, 2097152, 1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
  let alpha = message.split('').map(function(x) { return Morse.alpha[x] + '000'; });
  let nums = alpha.join('');
  let array = [];
  let answer = [];

  //Split up by 32
  for(let i = 0; i < nums.length; i += 32) {
    array.push(nums.substring(i,i+32));
  }
  while(array[array.length-1].length < 32) {
    array[array.length-1] += '0';
  }

  //Find Values
  for(let j = 0; j < array.length; j++) {
    let num = array[j][0] === '1' ? -4294967296 : 0;
    for(let n = 0; n < array[j].length; n++) {
      if(array[j][n] =='1') {
        num += bits32[n];
      }
    }
    answer.push(num);
  }

  return answer;
};

Morse.decode = function(integerArray){
  let bits32 = [2147483648, 1073741824, 536870912, 268435456, 134217728, 67108864, 33554432, 16777216, 8388608, 4194304, 2097152, 1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
  let array = [];

//Convert bits to morse code
  for(let i = 0; i < integerArray.length; i++) {
    if(integerArray[i] > 0) {
      let string = '';
      for(let j = 0; j < bits32.length; j++) {
        if(integerArray[i] >= bits32[j]) {
          integerArray[i] -= bits32[j];
          string += '1';
        } else {
          string += '0';
        }
      }
      array.push(string);
    } else {
      integerArray[i] = (integerArray[i] * -1) - 1;
      let string = '';
      for(let n = 0; n < bits32.length; n++) {
        if(integerArray[i] >= bits32[n]) {
          integerArray[i] -= bits32[n];
          string += '0';
        } else {
          string += '1';
        }
      }
      array.push(string);
    }
  }

//Convert morse code to letters
  let bits = array.join('');
  //Clean up edges
  while(bits[0] === '0') {
    bits = bits.substring(1);
  }
  while(bits[bits.length-1] == '0') {
    bits = bits.substring(0, bits.length-1);
  }
  let finalWords = bits.split('0000000');
  let finalArray = finalWords.map(function(x) { return x.split('000')});
  //Get the letters
  let answer = '';
  for(let a = 0; a < finalArray.length; a++) {
    for(let b = 0; b < finalArray[a].length; b++) {
      let letter = '';
      for(var key in Morse.alpha){
        if(Morse.alpha[key] == finalArray[a][b]){
          letter = key;
        }
      }
      answer += letter;
    }
    answer += ' ';
  }

  return answer.trim();
};

Morse.alpha = {
  'A': '10111',
  'B': '111010101',
  'C': '11101011101',
  'D': '1110101',
  'E': '1',
  'F': '101011101',
  'G': '111011101',
  'H': '1010101',
  'I': '101',
  'J': '1011101110111',
  'K': '111010111',
  'L': '101110101',
  'M': '1110111',
  'N': '11101',
  'O': '11101110111',
  'P': '10111011101',
  'Q': '1110111010111',
  'R': '1011101',
  'S': '10101',
  'T': '111',
  'U': '1010111',
  'V': '101010111',
  'W': '101110111',
  'X': '11101010111',
  'Y': '1110101110111',
  'Z': '11101110101',
  '0': '1110111011101110111',
  '1': '10111011101110111',
  '2': '101011101110111',
  '3': '1010101110111',
  '4': '10101010111',
  '5': '101010101',
  '6': '11101010101',
  '7': '1110111010101',
  '8': '111011101110101',
  '9': '11101110111011101',
  '.': '10111010111010111',
  ',': '1110111010101110111',
  '?': '101011101110101',
  "'": '1011101110111011101',
  '!': '1110101110101110111',
  '/': '1110101011101',
  '(': '111010111011101',
  ')': '1110101110111010111',
  '&': '10111010101',
  ':': '11101110111010101',
  ';': '11101011101011101',
  '=': '1110101010111',
  '+': '1011101011101',
  '-': '111010101010111',
  '_': '10101110111010111',
  '"': '101110101011101',
  '$': '10101011101010111',
  '@': '10111011101011101',
  ' ': '0' // Technically is 7 0-bits, but we assume that a space will always be between two other characters
};


//Tests
Morse.encode('HELLO WORLD'); //should return [-1440552402,-1547992901,-1896993141,-1461059584]
Morse.decode([-1440552402, -1547992901, -1896993141, -1461059584]); //should return 'HELLO WORLD'
Morse.encode('EEEEEEEIE'); //should return [-2004318070,536870912]
Morse.decode([-2004318070,536870912]); //should return 'EEEEEEEIE'
