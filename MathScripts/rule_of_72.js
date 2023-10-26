

const initialInvestmant = 1323;
const interestRate = 4;
const ruleOf72 = 72;

let yearsToDouble = ruleOf72 / interestRate;
let doubledInvestment = initialInvestmant * 2;

console.log("At a "+ interestRate +"% interest rate, your savings account will be worth $" + doubledInvestment.toFixed(2) +" in " + yearsToDouble.toFixed(2) +" years")