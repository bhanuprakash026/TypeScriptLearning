// interface as function
interface AddFn{
    (a: number, b: number): number
}

let addTwoNums: AddFn;

addTwoNums = (n1: number, n2: number) => {
    return n1 + n2
}

console.log(addTwoNums(10,16))

// Interface
interface Named {
    name: string
}
// Inheritence of interface
interface Greetable extends Named{
    
    greet(text: string): void
}

let user: Greetable

user  = {
    name: "Bhanu",
    
    greet(text: string): void {
        console.log(text + " " + this.name)
    }
}

user.greet("Hi I am")

// Using the interface in the class
class Person implements Greetable{
    name: string;
    age: number;
    
    constructor(n: string, age: number){
        this.name = n
        this.age = age
    }
    greet(text: string): void {
        console.log( text + " " + this. name)
    }

    printAge(){
        console.log('My Age is ',this.age)
    }
}

let itsme = new Person("Bhanu", 22)

itsme.printAge()
itsme.greet("Hello Good morning")

