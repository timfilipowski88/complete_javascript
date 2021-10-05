// Functions
// the code in the {} is called the function body
function logger() {
  console.log('My name is Jonas');
}
// The process of using the function is called running the function, invoking the function, or calling the function. calling / running / invoking
logger();
logger();
logger();

// Functions are generally passed data via parameters and return data
function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
// Capture value of function in a variable
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// Or Run it uncaptured
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);
