// While Loops

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`FOR Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE Lifting weights repetition ${rep}`)
  rep++;
}

let dice = Math.trunc(Math.random() * 6) +1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) +1;
}

