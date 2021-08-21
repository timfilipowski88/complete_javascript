// Object Methods
// Functions are really just another type of value. If a function is just a value then that means that we can creat a key value pair in which the value is a function. That means we can add functions to objects.

// Ojbect Literal
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // Any function that is attached to an object is called a method. This one below is called a function expression since it returns a value. 
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  }
  // This will not work because it is a function declaration instead of a function expression.
  // function calcAge(birthYear) {
  //   return 2037 - birthYear;
  // }
}
