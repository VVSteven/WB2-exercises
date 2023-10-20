//giving out pizza

let numOfPizza = 4;
let slicePerPizza = 8;
let numOfStudents = 3;

const totalSlices = numOfPizza * slicePerPizza;
console.log("The amount of pizza slices is: " + totalSlices)

const slicePerStudet = totalSlices / numOfStudents;
console.log("The amount of pizza slices per student is: " + slicePerStudet.toFixed(2))

const leftoverPizza = totalSlices % numOfStudents;
console.log("The amount of pizza slices that is leftover is: " + leftoverPizza)




