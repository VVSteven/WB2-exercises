//total tip amount
// formaula to calculate tip amount is: 

// total of the food 
let foodTotal = 230.45;
// 20% tip of the food
let tipTotal = .20 * foodTotal; 

// shows output of food bill
console.log("total food bill : " + foodTotal);
// shows output of tip
console.log("total tip       : " + tipTotal);

// calculates the total of price of the food and tip
const totalPrice = foodTotal + tipTotal;

//outputs the total price of the food and the tip
console.log("Total           : " + totalPrice.toFixed(2));