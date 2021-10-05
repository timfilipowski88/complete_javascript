// Calling a function within a function

// A machine to cut fruit into 4 pieces
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `This juice contains ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}

console.log(fruitProcessor(2, 3));
console.log(fruitProcessor(5, 1));
