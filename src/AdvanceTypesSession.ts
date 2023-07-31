// intersection types is allow us combine the our types

type Admin = {
    name: string;
    privilage: string[]
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevetedEmployee = Admin & Employee;

const e1: ElevetedEmployee = {
    name : "Bhanu",
    privilage: ["Create-server"],
    startDate: new Date()
}

// // we can also use interface below like this
// interface Admin {
//     name: string;
//     privilage: string[];
// }

// interface Employee{
//     name:string;
//     startDate: Date;
// }

// interface ElevetedEmployee extends Admin, Employee

type Combinable = number | string;
type Numaric = number | boolean

type Universe = Combinable & Numaric
type UnknownEmployee = Admin | Employee

function adding(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toLocaleString()
    } else {
        return a + b
    }
}

console.log(adding(20,6))
console.log(adding(15, "15"))

function printImformationOfEmployee(emp: UnknownEmployee){
    console.log(emp.name)
    if('privilage' in emp){
        console.log(emp.privilage)
    } 
    if ('startDate' in emp){
        console.log(emp.startDate)
    }

}

printImformationOfEmployee(e1)
printImformationOfEmployee({name: "Bhanu", startDate: new Date()})

class Car{
    drive(){
        console.log("Driving a car...")
    }
}


class Truck{
    drive(){
        console.log('Driving a Truck....')
    }

    loadCargo(n : number){
        console.log("Loaded the Cargo" + n)
    }
}

type Vehicle = Car | Truck
const v1 = new Car()
const v2 = new Truck()

function UseVehicle(vehicle: Vehicle){
    vehicle.drive()
    if('loadCargo' in vehicle){
        vehicle.loadCargo(1000)
    }
}

UseVehicle(v1)
UseVehicle(v2)

// Descrimated Unions

interface Bird{
    type: "bird"; //defining a property called type with a literal value "bird". In this context, "bird" is a specific string literal type.
    flyingSpeed: number

}

interface Horse{
    type: "horse";
    runningSpeed: number;
}

type Animal = Bird | Horse

function MoveAnimal(animal: Animal){
    let speed;
    switch (animal.type){
        case "bird":
            speed = animal.flyingSpeed
            break;
        case "horse":
            speed = animal.runningSpeed
    }

    console.log("Moving at speed of "+ speed + 'Km/hr')
}

MoveAnimal({type: 'bird', flyingSpeed: 50})
MoveAnimal({type: "horse", runningSpeed: 120})


// Index Properties

interface ErrorContainer{ // { email: "Not a valid email", Username: "Name must be start with capital letter!"}
    // Here we are saying that to typescript we don't know number of key value value Pairs
    // and alse we dont know name of key
    [key: string]: string, //any value can be assigned to the key property
}

const errorBag: ErrorContainer = {
    email: 'Not a valid Email',
    Username: "Name must be startwith capital letter.."
}

// FUNCTION OVERLOADS
// Feature allows us to define multiple function signatures