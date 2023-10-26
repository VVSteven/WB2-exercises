//total tip amount
// formaula to calculate tip amount is: 

// total of the food 
const foodTotal = 230.45;
// 20% tip of the food
const tipTotal = .20 * foodTotal; 
// calculates the total of price of the food and tip
const totalPrice = foodTotal + tipTotal;

//outputs the total price of the food and the tip
console.log("The tip on a " + totalPrice.toFixed(2) + " food bill is " + tipTotal);