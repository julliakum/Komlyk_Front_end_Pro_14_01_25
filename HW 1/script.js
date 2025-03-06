// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію
// Ступінь передається як другий аргумент у функцію
// pow(num, degree)

function pow(num, degree) {
    if (degree === 0) return 1;
    if (degree < 0) return 1 / pow(num, -degree);

    degree--;
    return num * pow(num, degree);}

const number = parseFloat(prompt("Enter the number:"));
const exponent = parseInt(prompt("Enter the degree:"));

console.log(`The number: ${number}, 
The degree: ${exponent}, 
Result: ${pow(number, exponent)}`);