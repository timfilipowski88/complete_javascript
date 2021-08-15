/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let person = "jonas";
let PI = 3.1415;

let job1 = "programmer";
let job2 = "teacher";

console.log(myCurrentJob);
console.log(myFirstJob);


true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// typeOf error
console.log(typeof null);



// let Variable declarations apply to variables that may need to be "mutated" or change in the future
let age = 30;
age = 31;

// const Variable Declarations apply to variables that never change. They are "immutable". Because they are empy they cannot be declared with empty values.
const birthYear = 1991;
// birthYear = 1990;  Throws error

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3

// + operator can be used to join or "concatinate" strings
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// assignment operator is the = sign
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators are used to create boolean values
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1999 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1999 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25-10-5;
console.log(x, y);

const averageAge =  (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
// 

/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK �  
// Test Data 1
let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
// Test Data 2
markHeight = 1.88;
markWeight = 95;
johnHeight = 1.76;
johnWeight = 85;
const markBMI2 = markWeight / (markHeight * markHeight);
const johnBMI2 = johnWeight / (johnHeight * johnHeight);
const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markBMI2, johnBMI2, markHigherBMI2);  
*/

/*
// Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);
console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

/*
// If Else Statements
const age = 15;

if(age >= 18) {
  console.log('Sarah can start driving license 🌹');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �  */
/*
const markHeight = 1.9;
const markWeight = 85;
const johnHeight = 1.75;
const johnWeight = 70;
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if(markBMI > johnBMI) {
  console.log(`Mark's BMI of ${markBMI} is higher than John's BMI of ${johnBMI}`);
} else {
  console.log(`John's BMI of ${johnBMI} is higher than Mark's BMI of ${markBMI}`);
}       */

// Conversion and Coercion
