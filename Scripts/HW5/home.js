
/*
 * #1
 *
 * Створіть функцію counter(), яка має реалізувати лічильник за допомогою замикання:
* функція може приймати число як аргумент counter(n)
* якщо число передано у функцію - лічба починається із зазначеного числа
 * якщо ні - то лічба триває
 */
//const counter = function() {}
//-------------------За допомогою замикаючої функції--------------------
// const counter = (() => {
// let sum = 0;
// return function sumator (n) {
//        if (typeof n === "number"){
//        sum = n;
//        return sum; 
//        }
// const current = sum;
// sum++;
// return current;
// }
// }) ();
//-----------------------------------------------------------------------
function example () {
let sum = 0;
return function sumator (n) {
       if (typeof n === "number"){
       sum = n;
       return sum; 
       }
const current = sum;
sum++;
return current;
}
};
const counter = example();

console.log(counter()) // 0
console.log(counter()) // 1
console.log(counter(100)) // 100
console.log(counter()) // 101
console.log(counter()) // 102
console.log(counter(500)) // 500
console.log(counter()) // 501
console.log(counter()) // 502
console.log(counter(0)) // 0
console.log(counter()) // 0
console.log(counter()) // 1
/*
 * #2
 *
 * Створіть функцію counterFactory, яка має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника - 0
 * counterFactory.value() - повертає значення лічильника
 * counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() - збільшує значення лічильника на 1
 * counterFactory.decrement() - зменшує значення лічильника на 1
 */
// const counterFactory = function () {}
function exersice () {
    let count = 0;
return {
    value (n) { 
        if (typeof n === 'number') {
        count = n;
        return n;
        }
        return count;        
    },
    increment () {
        count = count + 1;
        return count;
    },
    decrement () {
        count = count - 1;
        return count;
    }
}
}
const counterFactory = exersice();

console.log(counterFactory.value()) // 0
counterFactory.increment()
counterFactory.increment()
counterFactory.increment()
console.log(counterFactory.value()) // 3
counterFactory.decrement()
counterFactory.decrement()
console.log(counterFactory.value()) // 1
console.log(counterFactory.value(100)) // 100
counterFactory.decrement()
console.log(counterFactory.value()) // 99
console.log(counterFactory.value(200)) // 200
counterFactory.increment()
console.log(counterFactory.value()) // 201
/*
 * #3
 *
 * Створіть функцію myPow(a, b, myPrint). 
 * Всередині реалізуйте рекурсію для підрахунку результату піднесення числа a до ступеня b.

* - Функція myPrint(a, b, res) - глобальна функція, що має генерувати з параметрів a, b, res рядок вигляду 'a^b=res' і повертати його.

* - myPrint() має бути передана в myPow() як параметр і викликана всередині як callback-функція.

* - функція myPow() як значення, що повертається, приймає результат myPrint().
 */
// const myPrint = () => {}
// const myPow = () => {}

// const myPrint = (a, b, res) => {
//     return `${a}^${b}=${res}`
// }
// const myPow = (a, b, myPrint) => {
//     let res = 1;
//     const n = Math.abs(b);
// for(let i=1; i<=n; i++) {
//         res = res * a;   
//     }
// if (b<0) {
//     res = 1 / res;   
// }
//         return myPrint (a, b, res);
// }

const myPrint = (a, b, res) => {
    return `${a}^${b}=${res}`
}

const myPow = (a, b, myPrint) => {
    let res = 1;
    const n = Math.abs(b);
    
    return function (a, b) {
if (b===0) {
    res = 1;
    return myPrint (a, b, res);
}
if (b>0) {
return myPrint (a, b, res);
}
if (b<0) {
    res = 1 / res;
    return myPrint (a, b, res);
}

}
}

console.log(myPow(3, 4, myPrint)) // 3^4=81
console.log(myPow(2, 3, myPrint)) // 2^3=8
console.log(myPow(2, 0, myPrint)) // 2^0=1
console.log(myPow(2, -2, myPrint)) // 2^-2=0.25
/*
 * #4
 * Створіть функцію myMax(arr), яка як параметр приймає
 * довільний числовий масив і повертає максимальне число з переданого їй масиву.
 * У реалізації функції має бути застосовано метод Math.max() і apply().
 */
// const list = [12, 23, 100, 34, 56, 9, 233]
// const myMax = () => {}
const list = [12, 23, 100, 34, 56, 9, 233];
const myMax = (list) => {
    return Math.max.apply(null, list);
};
console.log(myMax(list)); // 233
/*
 * #5
 *
 * Створіть функцію myMul(a, b), яка буде множити числа а і b, повертаючи результат.
 */
// const myMul = () => {}
/*
 * Створіть функції myDouble(n), яка приймає один параметр і подвоює його.
 * Використовувати множення або інші математичні операції всередині функції - заборонено, тільки bind() і myMul().
 * Функція повертає результат обчислення.
 */
// const myDouble
// Аналогічним чином створюємо функцію myTriple(n), яка потроює параметр, що приймає, повертаючи результат.
// const myTriple
const myMul = (a, b) => {
    return a * b;
}
const myDouble = myMul.bind(null, 2);
const myTriple = myMul.bind(null, 3);

// const myDouble = (n) => {
//     return myMul(n, 2); 
// }
// const myTriple = (n) => {
//     return myMul(n, 3); 
// }
console.log(myDouble(3)) // = myMul(2, 3) = 6
console.log(myDouble(4)) // = myMul(2, 4) = 8
console.log(myDouble(5)) // = myMul(2, 5) = 10

console.log(myTriple(3)) // = myMul(3, 3) = 9
console.log(myTriple(4)) // = myMul(3, 4) = 12
console.log(myTriple(5)) // = myMul(3, 5) = 15