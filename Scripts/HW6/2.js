
console.log('------------------------------my method-----------------------------------');
console.log('Exersise - 1');

class CalorieCalculator_v2 {
    constructor() {
        this.productCollection = [];
    }
addProduct(productName, productCalories){
    this.productCollection.push({productName, productCalories});
}
getProductCalories(productName){
   const cal = this.productCollection.find(p => p.productName === productName)?.productCalories;
   if (cal === undefined) { 
        return 'Product not found' 
    };
   return cal;
}
removeProduct(productName){
    const ind = this.productCollection.findIndex(p => p.productName === productName);
    this.productCollection.splice(ind, 1);
}
}
const calorieCalculator_v2 = new CalorieCalculator_v2 ();
calorieCalculator_v2.addProduct('Coco', 100);
calorieCalculator_v2.addProduct('Cranbery', 50);
calorieCalculator_v2.addProduct('Cherry', 60);
calorieCalculator_v2.addProduct('Carrot', 30);
console.log(calorieCalculator_v2.productCollection);
console.log(calorieCalculator_v2.getProductCalories('Coco'));
console.log(calorieCalculator_v2.getProductCalories('Salo'));
console.log(calorieCalculator_v2.productCollection);

console.log('Exersise - 2');

class UniqueUsernames_v2 {
  constructor() {
    this.userColection = [];
  }
  addUser(username) {
    const us = this.userColection.find(p => p === username);
    if (us === undefined) {
    this.userColection.push(username);
    }
    else {
        return console.log(`${username} exist`);
    }
  }
  exists(username) {
    const ex = this.userColection.find(p => p === username);
        if (ex !== undefined){
            return `${username} exist`;
        }
  }
  count() {
    return this.userColection.length;
  }
}
// Демонстрація використання
const uniqueUsernames_v2 = new UniqueUsernames_v2 ();
uniqueUsernames_v2.addUser('Admin');
uniqueUsernames_v2.addUser('Victor');
uniqueUsernames_v2.addUser('General');
uniqueUsernames_v2.addUser('Victor');
console.log(uniqueUsernames_v2.userColection);
console.log(uniqueUsernames_v2.count());
console.log(uniqueUsernames_v2.exists('Admin'));


