// Rule of 72

let interestRate = .06;
let savingAccount = 200;
let interestRate2 = interestRate * 100; 

const ruleOf72 = 72;
const yearsToDouble = ruleOf72 / interestRate;

const t = savingAccount / interestRate;

console.log("At a "+ interestRate2 +" % interest rate, your savings account will be worth " + t +" in " + yearsToDouble +" years")
