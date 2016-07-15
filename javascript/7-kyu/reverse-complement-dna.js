//Rules
/*
In genetic the reverse complement of a sequence is formed by reversing the sequence and then taking the complement of each symbol.

The four nucleotides in DNA is Adenine (A), Cytosine (C), Guanine (G) and Thymine (Thymine).

A is the complement of T
C is the complement of G.
This is a bi-directional relation so:

T is the complement of A
G is the complement of C.
For this kata you need to complete the reverse complement function that take a DNA string and return the reverse complement string.

Note: You need to take care of lower and upper case. And if a sequence conatains some invalid characters you need to return "Invalid sequence".

This kata is based on the following one but with a little step in addition.
*/


//My Code
function reverseComplement(dna) {
  var array = dna.toUpperCase().split("");
  var comp = "";

  for(var i = 0; i < array.length; i++) {
    if(array[i] === "T") {
      comp += "A";
    }
    else if(array[i] === "A") {
      comp += "T";
    }
    else if(array[i] === "G") {
      comp += "C";
    }
    else if(array[i] === "C") {
      comp += "G";
    }
    else {
      return "Invalid sequence";
    }
  }

  return comp.split("").reverse().join("");
}


//Tests
reverseComplement("TTCCGGAA"); //should return "TTCCGGAA"
reverseComplement("GACTGACTGTA"); //should return "TACAGTCAGTC"
reverseComplement(""); //should return ""
reverseComplement("XYZ"); //should return "Invalid sequence"
