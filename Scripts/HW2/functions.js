//1
function getRandomInt(min, max) {
  return Math.floor(Math.random()*((max - min)+1));
}
console.log(getRandomInt(1, 10));
//2
function greetByName(msg, name) {
  return `${msg}, ${name}`;
}
console.log(greetByName("Hey", "Joe"));
//3
function sumBigIntegers(numStr1, numStr2) {
  const SumBigInit = BigInt(numStr1) + BigInt(numStr2);
  return SumBigInit;
}
console.log(sumBigIntegers(9007199254740991, 9007199254740991));
