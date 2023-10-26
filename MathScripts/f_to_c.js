//  Fahrenheit to Celsius 
// formula to convert fahrenheit to celsius: (f-32) 5/9 = c

const fahrenheit = 300;

//calculates celsius
let minus32 = fahrenheit - 32;
let times5 = minus32 * 5;
let celsius = times5 / 9 ;

//outputs answer
console.log(fahrenheit + " Fahrenheit is the same as " + celsius.toFixed(5) +  " celsius.")