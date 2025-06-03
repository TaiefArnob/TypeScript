//Daltatypes in TYpescript  number,string,boolea
function add(num1, num2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText) + (num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var printResult = true;
var n1 = 20;
var n2 = 25;
var someText = "Sum of two numbers is: ";
var ans = add(n1, n2, printResult, someText);
