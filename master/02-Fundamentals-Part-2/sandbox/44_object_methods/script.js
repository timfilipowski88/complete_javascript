// Object Methods
// Functions are really just another type of value. If a function is just a value then that means that we can creat a key value pair in which the value is a function. That means we can add functions to objects.

// Ojbect Literal
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: false,

  // Any function that is attached to an object is called a method. This one below is called a function expression since it returns a value. 
  // A method is like a property.
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // This will not work because it is a function declaration instead of a function expression.
  // function calcAge(birthYear) {
  //   return 2037 - birthYear;
  // }

  // The this keyword can refer to the current object that the method or function is working with? for the DRY principle is it always better to use the this keyword to point to the object instead of pointing to the name of the object. ie this.birthYear is always better than jonas.birthYear
  // calcAge: function() {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // }
  // To prevent the function from running multiple times we can run it once and store the value as a new property in the object. This saves on computation time. 
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
  }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());

// Challenge
// Write a method called getSummary and this method should return a string which summarizes the data about jonas. 
// 'Jonas is a 46 year old teacher, and he has a/no driver's license.'
