const peopleOnTour = 38;
const numOfSeats = 15;
const costPerVan = 250; 

let numOfVans = peopleOnTour / numOfSeats;
console.log(Math.ceil(numOfVans));

let totalCostPerVan = Math.ceil(numOfVans) * costPerVan;
console.log(totalCostPerVan);

let pricePerPerson = totalCostPerVan / peopleOnTour; 
console.log(pricePerPerson.toFixed(2));