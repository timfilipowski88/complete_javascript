// Looping through arrays
'use strict';
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true 
];
const types = [];


for (let i = 0; i < jonas.length; i++) {
// Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
// Filling types array
  // types[i] = typeof jonas[i];

// Filling types array push method
  types.push(typeof jonas[i]);
}

console.log(types);

const birthYears = [1991, 2007, 1969, 2020];
const ages = [];
for(let i = 0; i < birthYears.length; i++) {
  ages.push(2037 - birthYears[i]);
}
console.log(ages);

// continue and break
// Continue is to exit the current iteration of the loop and continue to the next one.
// Break is to completely terminate the loop

for (let i = 0; i < jonas.length; i++) {
  if(typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number')  break; 
  console.log(jonas[i], typeof jonas[i]);  
}
