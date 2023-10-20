
let toPay = .95;

const dollar = 1;
const quarters = 0.25;
const dimes = 0.1;
const nickeles = 0.05;
const pennies = 0.01;

toPayDollar   = toPay / dollar;
console.log("Dollars : " + Math.floor(toPayDollar));

toPayQuarters = (toPay % dollar) / quarters;
console.log("Quarters : " + Math.floor(toPayQuarters));

toPayDimes    = ((toPay % dollar) % quarters) / dimes;
console.log("Dimes : " + Math.floor(toPayDimes));

toPayNickles  = (((toPay % dollar) % quarters) % dimes) / nickeles;
console.log("Nickles : " + Math.floor(toPayNickles));

toPayPennies  = ((((toPay % dollar) % quarters) % dimes) % nickeles) / pennies;
console.log("Pennies : " + Math.floor(toPayPennies)); 
