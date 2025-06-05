// Union
let userId: string | number;
userId = 101;
userId = "ABC123";

// Literal Types
let gender: "male" | "female";
gender = "male"; // ✅
// gender = "other"; ❌ Error

// Type Alias (Custom Type)
type Person = {
  firstName: string;
  age: number;
};

// Using the custom type
const person: Person = {
  firstName: "Taief",
  age: 24,
};

//UNION

function combine(num1:number|string,num2:number|string){
  
  let result;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  }else{
    result = num1.toString() + num2.toString();
  }
  return result;
}

const sum=combine(10, 20); // 30
const combinedName=combine("Taief", "Arnob"); 

console.log(sum);
console.log(combinedName);
