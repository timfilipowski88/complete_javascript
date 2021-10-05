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

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends');
console.log(interestedIn);
// console.log(jonas.interestedIn);  
// This will not work because jonas does not have the property interestedIn

// console.log(jonas[interestedIn]);
// This will work because interestedIn gets evaluated in the brackets before it gets used by jonas to find the property

if(jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request, Choose between firstName, lastName, age, job, friends');
}

// Using dot or bracket notation to add properties to the object
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschedtmann';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael." 

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);