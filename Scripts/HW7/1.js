const arr = [1, 3, 5, 8, 10, 4];
console.log(arr);

arr[0] = 5;
console.log(arr);

arr.push(99);
arr.unshift(199);
console.log(arr);

const exampl = arr.map(arr => arr * 2);
console.log(exampl);

const exampl_2 = arr.length;
console.log(exampl_2);

const exampl_3 = arr.sort((a,b) => a - b);
console.log(exampl_3);

const exampl_4 = arr.filter(arr => arr > 5);
console.log(exampl_4);

const exampl_5 = arr.reverse();
console.log(exampl_5);

const exampl_6 = arr.filter(arr => arr % 2 === 0);
console.log(exampl_6);

console.log(arr);

console.log("------------------------------------------------------------");

const date = new Date();

console.log(date);

const nowDate = date.getDate();
console.log(nowDate);

const nowMonth = date.getMonth()+1;
console.log(nowMonth);