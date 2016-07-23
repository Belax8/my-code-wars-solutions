//Rules
/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") --> "A-Bb-Ccc-Dddd"
accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") --> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/


//My Code
function accum(s) {
	var str = s.split('');
  var answer = str[0].toUpperCase();

  for(let i = 1; i < s.length; i++) {
    answer += '-';
    for(let j = 0; j <= i; j++) {
      answer += j === 0 ? s[i].toUpperCase() : s[i].toLowerCase() ;
    }
  }

  return answer;
}


//Tests
accum("ZpglnRxqenU"); //should return "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
accum("NyffsGeyylB"); //should return "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
accum("MjtkuBovqrU"); //should return "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
accum("EvidjUnokmM"); //should return "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
accum("HbideVbxncC"); //should return "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
