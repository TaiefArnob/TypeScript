//Daltatypes in TYpescript  number,string,boolea

function add(
  num1: number,
  num2: number,
  printResult: boolean,
  someText: string
) {
  if (printResult) {
    console.log(`${someText}` + (num1 + num2));
  } else {
    return num1 + num2;
  }
}

const printResult = true;
const n1 = 20;
const n2 = 25;
const someText = "Sum of two numbers is: ";

const ans = add(n1, n2, printResult, someText);
