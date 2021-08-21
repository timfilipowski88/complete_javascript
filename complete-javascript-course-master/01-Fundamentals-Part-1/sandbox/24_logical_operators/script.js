// Logical Operators

const hasDriversLicense = true; // Variable A from the lecture
const hasGoodVision = true; // Variable B ""
// and operator
console.log(hasDriversLicense && hasGoodVision);
// or operator
console.log(hasDriversLicense || hasGoodVision);
// not operator
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive');
// } else {
//   console.log('Someone else should drive');
// }

const isTired = false;  // Variable C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive');
}