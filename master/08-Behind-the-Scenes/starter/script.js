'use strict';
// /*
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
  
//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if(birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//     }

//     function add(a, b) {
//       return a + b;
//     }

//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// */

// // Hoisting and the TDZ Temporal Dead Zone
// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);
// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Functions

// // Function declaration  - the only function that can be used before declaration
// // console.log(addDecl(3,5)); // Can be called before being defined
// function addDecl(a,b) {
//   return a + b;
// }  

// // Function Expression
// // console.log(addExpr(3,5));  // Can not be accessed before definition
// // const addExpr = function () {
// //   return a + b;
// // }

// // Function Arrow
// // console.log(addArrow(3,5)); // Can not be accessed before definition
// // const addArrow = (a,b) => a + b; // Arrow functions implicitely return


// // Example problem with hoisting related to var
// if(!numProducts) deleteShoppingCart(); // Deletes products even though there are 10 because numProducts comes back as undefined which is a falsey value. This is the problem with the var keyword. Be careful! DON'T USE VAR. Generally declare in const, let for certain things. Declare your variables at the top of the code scope. 

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!')
// }



// var x = 1;
// let y = 2;
// const z = 3;

// // Window command shows us stuff in the console. Const creates a property on the window object but var and let do not. To check if a variable exists in the window do console.log(x === window.x); where x is the name of the variable searched for. 

// console.log(this); // references the window object


// /*
// const calcAge = function(birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // returns undefined because this normal function has no lexical this to use
// }
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // returns the lexical window object since arrow functions do not get their own "this" , it inherits the this keyword from outside the function
// }

// const jonas = {
//   year: 1991,
//   calcAge: function() {
//     console.log(this); // logs the jonas object since the calcAge function belongs to it, returns the object
//     console.log(2037 - this.year); // logs 46 like it should. this refers to the object that has called it, jonas in this case and has access to properties of the object that called it, not the object it belongs to
//     // The this keyword points to the object that is calling the method.
//   }
// }
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; // sets matildas calcAge property eaual to jonas's ie, copies, its called method borrowing
// matilda.calcAge(); // returns the this instance that called the method, which is matilda.

// const f = jonas.calcAge; // method borrowing
// f(); // returns undefined because the f is now just a function, ie it is not an object calling the method and has no object 'this' attached to it. 
// */


// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function() {
//     // console.log(this);
//     console.log(2037 - year);

// //  Solution 1, pre ES6 solution
//     // const self = this; // self or that, pre ES6 solution

//     // const isMillenial = function ( ) {
//     //   console.log(self.year >= 1981 && self.year <=1996);
//     //   // console.log(this.year >= 1981 && this.year <=1996);
//     // };    
//     // isMillenial();


// // Solution 2 is to use an arrow function so that it uses its 'this' from the parent scope
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <=1996);
//       // console.log(this.year >= 1981 && this.year <=1996);
//     };    
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`); // fails because arrow function has no this keyword. The object does not count as a block. It is in the global scope.  'this' still points to the window object. 
//   },
// }
// jonas.greet();
// // General rule is to never use an arrow function as a method on a object to avoid this and also not using var

// jonas.calcAge();



// // Arguments keyword - is only available in regular functions
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2,5);
// addExpr(2, 5, 8, 12);

// // it is not available in arrow functions
// var addArrow = (a, b) => {
//   console.log(arguments) // uncaught reference because arrow functions do not get the arguments keyword. 
//   return a + b; // Must be explicitely returned because this arrow function has more than 1 line of code. 
// };


// Primitives vs Objects
let lastName = 'Williams'; // creates memory address in call stack
let oldLastName = lastName; // points to lastName memory address
lastName = 'Davis'; // creates new memory address 
console.log(lastName, oldLastName); // End up with different memory objects because these primitive types are executed in the call stack. Call stack address are immutable, a new address is created with the new value instead of changing the value at the current address

const jessica = { // create memory address in heap and point to it
  firstName: 'Jessica',
  lastName: 'Williams',
  age: '27',
}
const marriedJessica = jessica; // points to same memory address as jessica in the heap
marriedJessica.lastName = 'Davis'; // finds memory address in heap and changes the values associated with it rather than create a new address like with a primitive value above. Memory stored in the heap is mutable.
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

// marriedJessica = {}; // does not work because it creats a new object in the heap and tries to point to it, because marriedJessica is a const it is not allowed. 

// Copying Objects !!! This only creates a shallow copy. ie The first level of children within the object. 
const jessica2 = { 
  firstName: 'Jessica',
  lastName: 'Williams',
  age: '27',
  family: ['Alice', 'Bob'],
}

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(jessica2); // Both Families end up with 4 family members
console.log(jessicaCopy); // Both Families end up with 4 family members

// You need a deep clone but it is beyond this lecture. you will use youdash library to build a deep clone later. 