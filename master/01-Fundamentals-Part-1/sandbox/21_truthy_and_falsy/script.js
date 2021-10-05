// Truthy and Falsy
// 5 falsey values, all of which are converted to the boolean 'false', : 0, '', undefined, null, NaN
// all other values will be converted to the boolean 'true'

console.log(Boolean(0));  // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true -  any empty object

// In practice Boolean function is done with coercion behind the scenes

// How if else works in type Coercion
const money = 0;
if (money) {  // money here is converted from number 0 to boolean false
  console.log("Don't spend it all :)");
} else {
  console.log('You should get a job!');
}
const money1 = 10;
if (money1) {  // money here is converted from number 10 to boolean true
  console.log("Don't spend it all :)");
} else {
  console.log('You should get a job!');
}

// helpful use case is to check if a variable is defined or not
let height;
if (height) {
  console.log('Yay, hieght is defined.');
} else {
  console.log('hieght is undefined');
}

// An example of a bug that could trip  you up. Be careful, Logical operators help with this.
height = 0;
if (height) {
  console.log('Yay, hieght is defined.');
} else {
  console.log('hieght is undefined');
}
