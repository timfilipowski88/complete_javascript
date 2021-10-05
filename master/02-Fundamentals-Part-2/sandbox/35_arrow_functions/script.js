// Arrow Function
// An Arrow Function is a special form of function expression that is shorter and therefore faster to write.


// Arrow Function, the return is implicit, excellent for simple, one liner functions
// This is the simplest form, in which we have only one parameter and one line code that we want to return something.
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Arrow function that takes in multiple parameters, notice that return is needed at the end if you want a value sent back
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirementDifference = 65 - age;
  return `${firstName} retires in ${retirementDifference} years.`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

/*
A fundamental difference between the arrow functions and function declarations is that the arrow function does not recieve the 'this' keyword.
*/