// Basic Array Methods

// ADD Elements
// push() method adds elements to the end of the array
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
console.log(friends);
// since push is a function it can return something
const newLength = friends.push('Jay');
console.log(newLength);

// unshift() method adds elements to the beggining of the array
friends.unshift('John');
console.log(friends);

// REMOVE Elements
// pop() removes the last element in the array, it returns the removed element which can be useful
friends.pop();
friends.pop();
console.log(friends);
const poppedFriend = friends.pop()
console.log(poppedFriend);
console.log(friends);
// shift is opposite of unshift,it returns the removed element which can be useful
friends.shift();
console.log(friends);
// indexOf() returns element number of matching data
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // if data doesn't match it returns -1;
// includes()  ES6 feature. returns true or false if the value is in the array. This method uses strict equality (===) to evaluate
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

// Example with if statement
friends.push('Peter');
if (friends.includes('Peter')) {
  console.log('You have a friend named Peter.');
}