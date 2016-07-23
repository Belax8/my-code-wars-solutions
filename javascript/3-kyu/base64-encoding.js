//Rules
/*
Extend the String object to create a function that converts the value of the String to and from Base64 using the ASCII character set.

Usage:

// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
'this is a string!!'.toBase64();

// should return 'this is a string!!'
'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64();
*/


//My Code
String.prototype.toBase64 = function() {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var encoded = '';

  for(var i=0; i < this.length; i+=3) {
    var c1 = this.charCodeAt(i),
        c2 = this.charCodeAt(i+1),
        c3 = this.charCodeAt(i+2);
    encoded += chars[(c1 & 0xFC) >> 2];
    encoded += chars[((c1 & 0x03) << 4) | ((c2 & 0xF0) >> 4)];
    encoded += chars[((c2 & 0x0F) << 2) | ((c3 & 0xC0) >> 6)];
    encoded += chars[c3 & 0x3F];
  }

  return encoded;
};

String.prototype.fromBase64 = function() {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var decoded = '';

  for(var i=0; i < this.length; i+=4) {
    var c1 = chars.indexOf(this[i]),
        c2 = chars.indexOf(this[i+1]),
        c3 = chars.indexOf(this[i+2]),
        c4 = chars.indexOf(this[i+3]);
    decoded += String.fromCharCode(((c1) << 2) | ((c2 & 0x30) >> 4));
    decoded += String.fromCharCode(((c2 & 0x0F) << 4) | ((c3 & 0xFC) >> 2));
    decoded += String.fromCharCode(((c3 & 0x03) << 6) | c4);
  }

  return decoded;
};


//Tests
'this is a string!!'.toBase64(); //should return 'dGhpcyBpcyBhIHN0cmluZyEh'
'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64(); //should return 'this is a string!!'
