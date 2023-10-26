const lengthOfRoom = 12;
const widthOfRoom = 100; 
const tilesInBox = 12;

let areaOfRoom = lengthOfRoom * widthOfRoom;
console.log("The Length of the room is " + areaOfRoom + " Square feet.")

let boxesForRoom = areaOfRoom / tilesInBox; 
console.log("You need " + boxesForRoom.toFixed(2) + " boxes To fill the room.")

let tenPercentOfBoxes = Math.ceil(boxesForRoom) * .10;
console.log("For Accidents get 10% which is "+ tenPercentOfBoxes + ".");
console.log("Since you can not buy partial boxes you need to round up so now you need to buy " + Math.ceil(tenPercentOfBoxes) + " boxes.");

let numberOfTotalBoxes = Math.ceil(boxesForRoom)  +  Math.ceil(tenPercentOfBoxes); 
console.log("in total you need to buy "+ numberOfTotalBoxes+" boxes.");