console.log('JS #1. Домашнє завдання. Основи JavaScript: Працюємо зі змінними, типами даних');

let myNum = 1;
let myStr = 'Exersise';
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
let myObj = {
    first: 'First Name', 
    last: 'Last Name'};

console.log(myStr + myNum);
console.log(myNum, myStr, myBool, myArr, myObj);
myNum++;

console.log(myStr + myNum);
let decimal2 = myNum.toFixed(2);
console.log(decimal2);
myNum++;

console.log(myStr + myNum);
let myBigInt = 123n;
myBigInt = myBigInt +1n;
console.log(myBigInt);