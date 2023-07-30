"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: "Bhanu",
    age: 30,
    hobbies: ["Playing", "Cooking", "Learning"],
    role: Role.ADMIN
};
for (const hobbie of person.hobbies) {
    console.log(hobbie);
}
if (person.role === Role.ADMIN) {
    console.log("Its's a Admin");
}
