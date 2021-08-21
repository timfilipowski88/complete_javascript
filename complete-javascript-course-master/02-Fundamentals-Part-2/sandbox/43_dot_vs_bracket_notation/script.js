// Dot versus Bracket Notation

// Ojbect Literal
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 -1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);
// Now, the big difference between these two here is that in the bracket notation here, we can actually put any expression that we'd like, so we don't have to explicitly write the string here, but instead we can compute it from some operation because remember that an operation is basically an expression. So something that produces a value and so we can put that here, inside the brackets.

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


