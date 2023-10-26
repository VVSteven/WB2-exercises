//  Fahrenheit to Celsius 
// formula to convert fahrenheit to celsius; (F-32) 5/9 

const fahrenheit = 300;

//calculates celsius
let minus32 = fahrenheit - 32;
let times5 = minus32 * 5;
let celsius = times5 / 9 ;

//outputs answer
console.log(fahrenheit + " Fahrenheit is the same as " + celsius.toFixed(5) +  " celsius.")

//Celcius to Fahrenheit