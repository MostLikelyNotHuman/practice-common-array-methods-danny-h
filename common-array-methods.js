//1. Create array
let orders = [
    ["Latte", "Tea", "Espresso"],
    ["Croissant", "Muffin", "Bagel"]
];

//2. Log the number of drinks and number of pastries by using .length on each row
console.log(`The length of the drink orders is: ${orders[0].length} drinks.`);
console.log(`The length of the pastry orders is: ${orders[1].length} pastries.`);

//3. Access Orders Using Bracket Notation
console.log(`Your drink is ${orders[0][2]} and your pastry is ${orders[1][0]}`);
console.log(`Your drink is ${orders[0][0]} and your pastry is ${orders[1][1]}`);
console.log(`Your drink is ${orders[0][1]} and your pastry is ${orders[1][2]}`);

//4. Access Orders Dynamically with Variables
let drinkOrder = 1;
let pastryOrder = 0;
console.log(`Your drink is ${orders[0][drinkOrder]} and your pastry is ${orders[1][pastryOrder]}`);

//5. Write a loop that logs all the items in the drink category,
//ensuring the loop dynamically adjusts to the number of items using .length.
console.log("The drink category contains: ");
for (let i = 0; i < orders[0].length; i++) {
    console.log(orders[0][i]);
}

//6. Add a New Order & Track Length
orders[0].push("Flat White");
console.log(`The new length of the drink orders is: ${orders[0].length} drinks.`);

//I assume log this last order with one drink and no pastries?
let newDrinkOrder = 3;
let newPastryOrder;

if (0 <= newDrinkOrder && newDrinkOrder < orders[0].length && newDrinkOrder !== undefined) {
    console.log(`Your drink is ${orders[0][newDrinkOrder]}.`);
}
if (0 <= newPastryOrder && newPastryOrder < orders[1].length && newPastryOrder !== undefined) {
    console.log(`Your pastry is ${orders[1][newPastryOrder]}.`);
}

















/*
if (0 <= newDrinkOrder <= orders[0].length && 0 <= newPastryOrder <= orders[1].length) {
    console.log(`Your drink is ${orders[0][newDrinkOrder]} and your pastry is ${orders[1][newPastryOrder]}`);
}

else if (0 <= newDrinkOrder <= orders[0].length && newPastryOrder === undefined) {
    console.log(`Your drink is ${orders[0][newDrinkOrder]}`);
}

else if (!newDrinkOrder && newPastryOrder) {
    console.log(`Your pastry is ${orders[1][newPastryOrder]}`);
}
*/