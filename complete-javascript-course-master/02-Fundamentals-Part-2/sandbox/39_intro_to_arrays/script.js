// Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
// The 'literal' syntax
const friendsArray = ['Michael', 'Steven', 'Peter', 'Nate'];
console.log(friendsArray);
// or wierd way
const yearNums = new Array(1991, 1984, 2008, 2020);

console.log(friendsArray[0]);
console.log(friendsArray[2]);

console.log(friendsArray.length);
// To get last element
console.log(friendsArray[friendsArray.length - 1]);
// To add elements to the array, 'mutating' it
friendsArray[2] = 'Jay';
console.log(friendsArray);

// Arrays can hold different value types
const firstName = 'Jonas';
const jonas = [firstName, 'Schnedtmann', 2037 - 1991, 'teacher', friendsArray];
console.log(jonas);

// Array Exercise
const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ageArray = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ageArray);