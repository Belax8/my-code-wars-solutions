//Rules
/*
The four bases found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

In genetics, GC-content is the percentage of Guanine (G) and Cytosine (C) bases on a DNA molecule that are either guanine or cytosine.

Given a DNA sequence (a string) return the GC-content in percent, rounded up to 2 decimal digits.

For more information about GC-content you can take a look to wikipedia GC-content.

For example: the GC-content of the following DNA sequence is 50%: "AAATTTCCCGGG".
*/


//My Code
function gcContent(dna) {
  var array = dna.toUpperCase().split("");
  var count = 0;
  if(dna.length <= 0) {return 0;}

  for(var i = 0; i < array.length; i++) {
    if(array[i] === "G" || array[i] === "C") {
      count += 1;
    }
  }
  return (count / array.length) * 100;
}


//Tests
gcContent("G"); //should return 100
gcContent("C"); //should return 100
gcContent("A"); //should return 0
gcContent("T"); //should return 0
gcContent("AAA"); //should return 0.0
gcContent("AAACCCGGGTTT"); //should return 50
gcContent(""); //should return 0.0
gcContent("aaacccgggttt"); //should return 50
