// Union
var userId;
userId = 101;
userId = "ABC123";
// Literal Types
var gender;
gender = "male"; // ✅
// Using the custom type
var person = {
    firstName: "Taief",
    age: 24,
};
//UNION
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum = combine(10, 20); // 30
var combinedName = combine("Taief", "Arnob");
console.log(sum);
console.log(combinedName);
