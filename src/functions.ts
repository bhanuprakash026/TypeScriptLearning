function add(n1: number, n2: number):number{
    return n1 + n2
}

function printResult(num: number):void{
    console.log("Result "+ num)
}

printResult(add(10,7))

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(5,5))


