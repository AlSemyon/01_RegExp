

// Два способа создания регулярного выражения
// Методы regexp
// flags
// dot pattern
// quantity
// character class  pattern, negate character class, ranges
// grouping pattern, alternation
// lookahead  ?=, ?! */
// word boundary \b, \B

var st = "Is this This?";

var a = new RegExp('[a-z]+', 'g');

var b = /[a-z]{4}/g;


var text = 'sadf 2134 asdf';
var text1 = 13213;


console.log(b.test(text));
console.log(b.test(text1));