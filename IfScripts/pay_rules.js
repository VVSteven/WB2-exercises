// calculation of gross pay 

let hoursWorked = 41;


if (hoursWorked <= 39) {
    payRate = 12.50;
    console.log("Reason: Worked less than 40 hours")
  } else if (hoursWorked == 40) {
    payRate = 25.00;
    console.log("Reason: Worked exactly 40 hours")
    
} else {
    payRate = 37.50;
    console.log("Reason: Worked more than 40 hours")
  }
  console.log(payRate)