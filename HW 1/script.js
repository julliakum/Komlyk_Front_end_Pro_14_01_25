// //Task #1
// let num_1 = prompt("Task #1. Please enter the FIRST number.");
// let num_2 = prompt("Task #1. Please enter the SECOND number.");

// if (num_1 > num_2) {
//     alert(`Task #1. \n ${num_1} is greater than ${num_2}.`);
// } else if (num_1 < num_2) {
//     alert(`Task #1. \n ${num_1} is less than ${num_2}.`);
// } else {
//     alert(`Task #1. \n ${num_1} is equal to ${num_2}.`);
// }


// //Task #2
// let numKm = prompt("Task #2. Please enter the FIRST number (kilometer value).");
// let numFt = prompt("Task #2. Please enter the SECOND number (feet value).");

// if ((numKm * 1000) > (numFt * 0.305)) {
//     alert(`Task #2. \n ${numFt} feet is less than ${numKm} kilometers.`);
// } else if ((numKm * 1000) < (numFt * 0.305)) {
//     alert(`Task #2. \n ${numKm} kilometers is less than ${numFt} feet.`);
// } else {
//     alert(`Task #2. \n ${numKm} kilometers is equal to ${numFt} feet.`);
// }


// //Task #3
// let numA = prompt("Task #3. Enter number A:");
// let numB = prompt("Task #3. Enter number B:");

// if (numB % numA === 0 && numA % numB === 0) {
//     alert(`Task #3. \n Number A (${numA}) is a divisor of number B (${numB}). \n Number B (${numB}) is a divisor of number A (${numA}).`);
// } 
// else if (numB % numA !== 0 && numA % numB === 0) {
//     alert(`Task #3. \n Number A (${numA}) is not a divisor of number B (${numB}). \n Number B (${numB}) is a divisor of number A (${numA}).`);
//     }
// else if (numB % numA === 0 && numA % numB !== 0) {
//     alert(`Task #3. \n Number A (${numA}) is a divisor of number B (${numB}). \n Number B (${numB}) is not a divisor of number A (${numA}).`);
// }
// else {
//     alert(`Task #3. \n Number A (${numA}) is not a divisor of number B (${numB}). \n Number B (${numB}) is not a divisor of number A (${numA}).`);
// }


// //Task #4
// let number = prompt("Task #4. Enter number:");
// let lastDigit = number % 10;

// if (lastDigit % 2 === 0) {
//     alert(`Task #4. \nEntered number: ${number}. \nThe last digit is ${lastDigit}. \n${lastDigit} is even.`);
// } 
// else {
//     alert(`Task #4. \nEntered number: ${number}. \nThe last digit is ${lastDigit}. \n${lastDigit} is odd.`);
// }


// //Task #5
// let number = prompt("Task #5. Enter DOUBLE DIGIT number:");

// let firstDigit = +number.toString()[0];
// let lastDigit = +number.toString()[1];

// if (firstDigit > lastDigit) {
//     alert(`Task #5. \nEntered number: ${number}. \n${firstDigit} is greater than ${lastDigit}.`);
// } 
// else {
//     alert(`Task #5. \nEntered number: ${number}. \n${firstDigit} is less than ${lastDigit}.`);
// }


//Task #5
let number = prompt("Task #5. Enter DOUBLE DIGIT number:");

let firstDigit = +number.toString()[0];
let lastDigit = +number.toString()[1];

if (firstDigit > lastDigit) {
    alert(`Task #5. \nEntered number: ${number}. \n${firstDigit} is greater than ${lastDigit}.`);
} 
else {
    alert(`Task #5. \nEntered number: ${number}. \n${firstDigit} is less than ${lastDigit}.`);
}


