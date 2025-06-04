//Object,Array,Tuple,Enum,
console.log("Learning typescript in L2/app.ts");

enum Role {Admin, User, Developer}

const person: {
  name: string;
  age: number;
  xyz: {
    address: string;
  };
  skills: string[];
  products:[number, string];
  role: Role;
} = {
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

if(person.role === Role.Developer) {
  console.log("Role is Developer");
}else if(person.role === Role.Admin) {
  console.log("Role is Admin");
}else if(person.role === Role.User) {
  console.log("Role is User");
}

