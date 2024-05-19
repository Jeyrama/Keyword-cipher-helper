/*
A keyword cipher is a monoalphabetic cipher 
which uses a "keyword" to provide encryption. 
It is somewhat similar to a Caesar cipher.

In a keyword cipher, repeats of letters in the keyword are removed and 
the alphabet is reordered such that the letters in the keyword appear first, 
followed by the rest of the letters in the alphabet in their otherwise usual order.

E.g. for an uppercase latin alphabet with keyword of "KEYWORD":
  A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z
  becomes:
  K|E|Y|W|O|R|D|A|B|C|F|G|H|I|J|L|M|N|P|Q|S|T|U|V|X|Z

such that:
  cipher.encode('ABCHIJ') == 'KEYABC'
  cipher.decode('KEYABC') == 'ABCHIJ'

All letters in the keyword will also be in the alphabet. 
Only the first occurence of a letter in a keyword should be used. 
Any characters not provided in the alphabet should 
be left in situ when encoding or decoding.
*/


// Solution

function KeywordCipher(abc, keyword) {
  let key = (keyword + abc).split('').filter(function(l,i,a) { return a.indexOf(l) == i });
  function code(k1, k2, s) { return s.split('').map(function(l){  return k1[k2.indexOf(l)] || l }).join('') };
  this.encode = code.bind(this, key, abc);
  this.decode = code.bind(this, abc, key);
}