// Conditional (Terenary) Operator
// Similar to an if/else statement but all on one line

const age = 18;
// Conditional ? if : else    Essentially can only be one line of code. The else block is required.
age >= 18 ? console.log('I like wine') : console.log('I like water');

// An operator always produces a value like >=  . In other words and operator is an expression

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I like to drink ${drink}`);

// Terenary operator is not a full replacement of if/else but it is greate for small one line code block executions.