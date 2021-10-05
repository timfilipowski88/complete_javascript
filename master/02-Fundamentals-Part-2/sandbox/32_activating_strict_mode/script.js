// This activates strict mode, it must be the first line of code in each script. You can write comments. Strict mode allows us to avoid introducing bugs to our code because it does two things. It will create visible errors instead of failing silently. It also forbids us to do certain things. 
'use strict';

let hasDriversLicense = false;
const passTest = true;
// strict mode catches this misspelled variable thats missing the s
// if (passTest) hasDriverLicense = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// Strict mode also prevents you from adding variable names that might be added later i.e.
// const interface = 'Audio';
// const private = 534;
// const if = 23;