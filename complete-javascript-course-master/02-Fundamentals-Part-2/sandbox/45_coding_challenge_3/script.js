/* 
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
*/
const person1 = {
  firstName: 'Mark',
  lastName: 'Miller',
  fullName: this.firstName + ' ' + this.lastName,
  weight: 78,
  hieght: 1.69,
  calcBMI: function () {
    this.bmi = this.weight / this.hieght**2;
    return this.bmi;
  }
}
const person2 = {
  firstName: 'John',
  lastName: 'Smith',
  fullName: this.firstName + ' ' + this.lastName,
  weight: 92,
  hieght: 1.95,
  calcBMI: function () {
    this.bmi = this.weight / this.hieght**2;
    return this.bmi;
  }
}

if (person1.calcBMI() > person2.calcBMI()) {
  console.log(`${person1.firstName}'s BMI is higher(${person1.calcBMI()}), than ${person2.firstName}'s BMI (${person2.calcBMI()})`)
} else if (person2.calcBMI() > person1.calcBMI()) {
  console.log(`${person2.firstName}'s BMI is higher(${person2.calcBMI()}), than ${person1.firstName}'s BMI (${person1.calcBMI()})`)
}
console.log(person1.calcBMI());
console.log(person2.calcBMI());