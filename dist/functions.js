"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result " + num);
}
printResult(add(10, 7));
let combineValues;
combineValues = add;
console.log(combineValues(5, 5));
