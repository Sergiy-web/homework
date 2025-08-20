//1-------------------------------------
const userObj = {
    firstName: 'John',
    lastName: 'Smith',
    age: '30'};    
console.log(userObj)
//2-------------------------------------
function fullName(userObj){
    return userObj.firstName + " " + userObj.lastName;
}
console.log(fullName(userObj));
//3-------------------------------------
function defUpperStr(userObj){
    const user = userObj || { firstName: "Default", lastName: "Text" };
    return fullName(user).toUpperCase();
}
console.log(defUpperStr(userObj));
console.log(defUpperStr());
//4-------------------------------------
function evenFn(n){
let equal = [];
    for (let i = 0; i <= n; i+=2) {
        equal.push(i);
    }
return equal;
}
console.log(evenFn(10));
console.log(evenFn(15));
//5-------------------------------------
let dayName;
function weekFn(n){    
    switch(n){
        case 1: 
        dayName = "Monday";
        break;
        case 2: 
        dayName = "Tuesday";
        break;
        case 3: 
        dayName = "Wednesday";
        break;
        case 4: 
        dayName = "Thursday";
        break;
        case 5: 
        dayName = "Friday";
        break;
        case 6: 
        dayName = "Saturday";
        break;
        case 7: 
        dayName = "Sunday";
        break;
            default:
            dayName = null;
    }
return dayName;
}
console.log(weekFn(5));
console.log(weekFn(9.45));
//6-------------------------------------
function ageClassification(n){
let classAge;
classAge = (n <= 0) ? null 
         : (n <= 24) ? 'Дитинство'
         : (24 < n && n < 44) ? 'Молодість'
         : (44 <= n && n < 65) ? 'Зрілість'
         : (65 <= n && n < 75) ? 'Старість'
         : (75 <= n && n < 90) ? 'Довголіття'
         : (90 <= n && n < 122) ? 'Рекорд'
         : (n > 122) ? null
         : null;
return classAge;
}
console.log(ageClassification(12));
console.log(ageClassification(75.50));
console.log(ageClassification(0));
console.log(ageClassification(500));
//7-------------------------------------
function oddFn(n){
let equal = [];
let i = 1;
while (i<=n){
    equal.push(i);
    i+=2;
}
return equal;
}
console.log(oddFn(10));
console.log(oddFn(15));
//8-------------------------------------
function cbRandom(a, b) { 
    return Math.floor(Math.random()*((b-a)+1));
}
function cbPow(a, b) { 
    return Math.pow(a, b);
}
function cbAdd(a, b) { 
    return a+b;
}
function mainFunc(a, b, func){
    if (typeof func != 'function' ){
    return false;
    }
return func(a, b);
}
console.log(mainFunc(1, 10, cbRandom));
console.log(mainFunc(1, 10, cbAdd));
console.log(mainFunc(1, 10, cbPow));
console.log(mainFunc(1, 10));
console.log(mainFunc(1, 10, 100));