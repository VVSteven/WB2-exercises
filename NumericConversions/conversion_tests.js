// Description: This script tests various numeric
// conversion techniques
// Author: Elvis Canastuj 

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";

aParseInt = parseInt(a);
console.log(aParseInt)

aParseFloat = parseFloat(a);
console.log(aParseFloat)

aNumber = Number(a);
console.log(aNumber)

aUnary = +a;
console.log(aUnary)

console.log("----------------------------------------------------")

bParseInt = parseInt(b);
console.log(bParseInt)

bParseFloat = parseFloat(b);
console.log(bParseFloat)

bNumber = Number(b);
console.log(bNumber)

bUnary = +b;
console.log(bUnary)

console.log("----------------------------------------------------")

cParseInt = parseInt(c);
console.log(cParseInt)

cParseFloat = parseFloat(c);
console.log(cParseFloat)

cNumber = Number(c);
console.log(cNumber)

cUnary = +c;
console.log(cUnary)

console.log("----------------------------------------------------")

dParseInt = parseInt(d);
console.log(dParseInt)

dParseFloat = parseFloat(d);
console.log(dParseFloat)

dNumber = Number(d);
console.log(dNumber)

dUnary = +d;
console.log(dUnary)
