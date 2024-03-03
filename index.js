// EXAMPLE 1 - Check if a String contains only Spaces in JavaScript

function containsOnlySpaces(str) {
  return str.trim().length === 0;
}

console.log(containsOnlySpaces('   ')); // 👉️ true
console.log(containsOnlySpaces('  123  ')); // 👉️ false
console.log(containsOnlySpaces('bobbyhadz.com ')); // 👉️ false
console.log(containsOnlySpaces('')); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a String contains only spaces using `RegExp.test()`

// function containsOnlySpaces(str) {
//   return /^\s*$/.test(str);
// }

// console.log(containsOnlySpaces('   ')); // 👉️ true
// console.log(containsOnlySpaces('  123  ')); // 👉️ false
// console.log(containsOnlySpaces('bobbyhadz.com ')); // 👉️ false
// console.log(containsOnlySpaces('')); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a String contains only spaces using `String.match()`

// function containsOnlySpaces(str) {
//   return str.match(/^\s*$/) !== null;
// }

// console.log(containsOnlySpaces('   ')); // 👉️ true
// console.log(containsOnlySpaces('  123  ')); // 👉️ false
// console.log(containsOnlySpaces('bobbyhadz.com ')); // 👉️ false
// console.log(containsOnlySpaces('')); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if String contains Whitespace in JavaScript

// function containsWhitespace(str) {
//   return /\s/.test(str);
// }

// console.log(containsWhitespace('  ')); // 👉️ true
// console.log(containsWhitespace('bobby hadz com')); // 👉️ true
// console.log(containsWhitespace('')); // 👉️ false
// console.log(containsWhitespace('test')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if String contains Whitespace using `String.includes()`

// function containsWhitespace(str) {
//   return str.includes(' ');
// }

// console.log(containsWhitespace('  ')); // 👉️ true
// console.log(containsWhitespace('bobby hadz com')); // 👉️ true
// console.log(containsWhitespace('')); // 👉️ false
// console.log(containsWhitespace('test')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 6 - Check if a string contains whitespace using `String.match`

// function containsWhitespace(str) {
//   return str.match(/\s/) !== null;
// }

// console.log(containsWhitespace('bobby hadz')); // 👉️ true
// console.log(containsWhitespace('hello\tworld')); // 👉️ true
// console.log(containsWhitespace('hello\nworld')); // 👉️ true
// console.log(containsWhitespace('bobbyhadz.com')); // 👉️ false
