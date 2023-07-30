"use strict";
const combine = (input1, input2, resultConvertion) => {
    let result;
    if (resultConvertion === 'as-num') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
const combination = combine(26, 56, 'as-num');
console.log(combination);
const combination1 = combine("Bhanu", "Prakash", 'as-text');
console.log(combination1);
const combination2 = combine("26", "56", 'as-num');
console.log(combination2);
