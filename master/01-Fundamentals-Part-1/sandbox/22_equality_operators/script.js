// Equality Operators
const age = 18;
// when if statement contains only one line of code in the curly braces they can be ommitted like this
if (age === 18) console.log('You just became an adult');  // === returns boolean, this is a strict equality operator because it does not do type coercion. 
// == does type coercion
console.log('18' == 18, '18' === 18);

// In General avoid the == type operator. If you have two types it is better to convert the value manually and avoid the == operator. 

// Prompt Function
const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // favorite converts the string '23' to the number 23 with the number function in that variable, hence === evaluates to true
  console.log('Cool, 23 is the number');
} else if (favorite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}

// Operator for false
if (favorite !== 23) console.log('Why not 23?');