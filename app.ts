// Type Unknown ====> Type script will prevents the unknown type being use 

let userInput: unknown;
let userName: string;

userInput = 5;
userName = "Bhanu"
if (typeof userInput === "string"){
    userName = userInput
}


function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
}

welcomePeople(["Bhanu", "Prakash", "Tankasalaa"])