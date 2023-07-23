enum Role { ADMIN, READ_ONLY, AUTHOR };


const person // :{name: string; age: number; hobbies: string[], role: [number, string]} 
= 
{
    name: "Bhanu",
    age: 30,
    hobbies: ["Playing", "Cooking", "Learning"],
    role: Role.ADMIN
}

for (const hobbie of person.hobbies){
    console.log(hobbie);   
}

if(person.role === Role.ADMIN){
    console.log("Its's a Admin");
    
}
