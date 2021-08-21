// Conversion and Coercion
const inputYear = '1991';
console.log(inputYear + 18);
// consoles 199118 - to convert we use Number, its a function to convert strings to numbers
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
// convert it with the number function does not change the original value of the const variable

console.log(Number('Jonas')); // Returns not a number when an operation with numbers fails due to an invalid number, typeof NaN returns number as a result

console.log(String(23), 23); // also works

// JavaScript can convert to a Number, String, or Boolean, It CANNOT convert to Undefined or Null. Booleans will be in a seperate section
// JavaScript generally does typeof Conversion for us

// Type Coercion will happen behind the scenes when two value types dont match. Basic examples
console.log("I am " + 23 + " years old.");
console.log("I am " + "23" + " years old.");
console.log("I am " + String(23) + " years old.");

console.log('23' - '10' - 3); // returns the number 10
console.log('23' + '10' + 3); // returns the string 23103
console.log('23' / '2'); // returns the number 11.5
console.log('23' > '18'); // returns the boolean true

// A game called Guess the Output
let n = '1' + 1; // '11'
n = n -1; // 10
console.log(n);
console.log(2+3+4+'5'); // '95'
console.log('10'-'4'-'3'-2+'5'); // '15'
// Sometimes type Coercion can introduce bugs to your sytem when you don't know how to use it. With proper use it can make your code cleaner and easier to read

