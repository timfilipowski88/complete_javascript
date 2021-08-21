/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
let game1 = {
  dolphins: 96,
  koalas: 88
}
let game2 = {
  dolphins: 108,
  koalas: 91
}
let game3 = {
  dolphins: 89,
  koalas: 110
}
let dolphinsAvg = (game1.dolphins + game2.dolphins + game3.dolphins) / 3;
let koalasAvg = (game1.koalas + game2.koalas + game3.koalas) / 3;
if (dolphinsAvg > koalasAvg) {
  console.log(`Dolphins win! with an average score of ${dolphinsAvg}`);
} else {
  console.log(`Koalas win with an average score ${koalasAvg}`);
}
// Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks �
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 3. 
game1 = {
  dolphins: 97,
  koalas: 109
}
game2 = {
  dolphins: 112,
  koalas: 95
}
game3 = {
  dolphins: 101,
  koalas: 123
}
dolphinsAvg = (game1.dolphins + game2.dolphins + game3.dolphins) / 3;
koalasAvg = (game1.koalas + game2.koalas + game3.koalas) / 3;
console.log(dolphinsAvg);
console.log(koalasAvg);

if (dolphinsAvg > koalasAvg && dolphinsAvg > 100) {
  console.log(`Dolphins win! with an average score of ${dolphinsAvg}`);
} else if (koalasAvg > 100) {
  console.log(`Koalas win with an average score ${koalasAvg}`);
} else {
  console.log('Neither team averaged 100 points');
}

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
game1 = {
  dolphins: 101,
  koalas: 101
}
game2 = {
  dolphins: 101,
  koalas: 101
}
game3 = {
  dolphins: 101,
  koalas: 101
}
dolphinsAvg = (game1.dolphins + game2.dolphins + game3.dolphins) / 3;
koalasAvg = (game1.koalas + game2.koalas + game3.koalas) / 3;

if (dolphinsAvg > koalasAvg && dolphinsAvg > 100) {
  console.log(`Dolphins win! with an average score of ${dolphinsAvg}`);
} else if (koalasAvg > dolphinsAvg && koalasAvg > 100) {
  console.log(`Koalas win with an average score ${koalasAvg}`);
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100) {
  console.log('Draw!, Teams have tied');
} else {
  console.log('No winner, Neither team averaged 100 points');
}
