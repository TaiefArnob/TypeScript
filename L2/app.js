//Object,Array,Tuple,Enum,
console.log("Learning typescript in L2/app.ts");
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Developer"] = 2] = "Developer";
})(Role || (Role = {}));
var person = {
    name: "Taief",
    age: 24,
    xyz: {
        address: "Dhaka, Bangladesh",
    },
    skills: ["NodeJs", "TypeScript", "React"],
    products: [1, "Laptop"],
    role: Role.Developer
};
console.log(person.name, person.age, person.xyz.address, person.skills, person.products);
if (person.role === Role.Developer) {
    console.log("Role is Developer");
}
else if (person.role === Role.Admin) {
    console.log("Role is Admin");
}
else if (person.role === Role.User) {
    console.log("Role is User");
}
