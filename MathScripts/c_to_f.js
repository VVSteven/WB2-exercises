//Celcius to Fahrenheit
// formula to converter celsius to fahrenheit: (c-5/9) + 32 = f 

const celsius = 4;

//calculates fahrenheit
let times9 = celsius * 9;
let divide5 = times9 / 5 ;
let fahrenheit = divide5 + 32;

//outputs answer
console.log(celsius + " Celsius is the same as " + fahrenheit.toFixed(4) +  " fahrenheit.")