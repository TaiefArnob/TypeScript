//Functions..

console.log('Learning Functions in TypeScript');


function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(5, 10);

console.log(`The sum of 5 and 10 is ${add(5, 10)}`);

function greet(name: string): string {
    return `Hello, ${name}!`;
}