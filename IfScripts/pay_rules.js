// calculation of gross pay 

let hoursWorked = 39;


if (hoursWorked == 40) {
    payRate = 25.00;
  } else if (hoursWorked <= 39) {
    payRate = 12.50;
} else {
    payRate = 37.30;
  }
  console.log(payRate)