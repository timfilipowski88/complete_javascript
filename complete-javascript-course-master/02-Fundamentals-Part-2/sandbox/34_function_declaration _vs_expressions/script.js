// Function Declarations vs Expressions

// Function Delaration
// You can call a function declaration before you define it, Even though that may not be such a good idea in many cases
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
// Parameter is the placeholder in the function(birthYear) and the Argument is what is passed (1991)
const age1 = calcAge1(1991);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);

// Jonas prefers function expressions because then he has to define the functions first before calling them. 