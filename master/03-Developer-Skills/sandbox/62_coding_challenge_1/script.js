// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// First print the string with the degrees
// Print string with index position plus 1
// concat them together into their given string

/*  My answer
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + ' *C in ' + (arr.indexOf(arr[i]) + 1) + ' days');
  }
};

printForecast([12, 3, 4]);
printForecast([12, 5, -5, 0, 4]);
*/

// His answer
//  1) Understanding the problem
// - Array transformed to string seperated by ...
// - What is the X Days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with *C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast2 = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}*C in ${i + 1} days ...`;
  }
  console.log('...' + str);
};

printForecast2(data1);
