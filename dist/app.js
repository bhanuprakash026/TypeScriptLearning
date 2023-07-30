"use strict";
let addTwoNums;
addTwoNums = (n1, n2) => {
    return n1 + n2;
};
console.log(addTwoNums(10, 16));
let user;
user = {
    name: "Bhanu",
    greet(text) {
        console.log(text + " " + this.name);
    }
};
user.greet("Hi I am");
class Person {
    constructor(n, age) {
        this.name = n;
        this.age = age;
    }
    greet(text) {
        console.log(text + " " + this.name);
    }
    printAge() {
        console.log('My Age is ', this.age);
    }
}
let itsme = new Person("Bhanu", 22);
itsme.printAge();
itsme.greet("Hello Good morning");
