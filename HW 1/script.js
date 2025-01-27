//Task #1
let num_1 = prompt("Task #1. Please enter the FIRST number.");
let num_2 = prompt("Task #1. Please enter the SECOND number.");

if (num_1 > num_2) {
    alert(`Task #1. \n ${num_1} is greater than ${num_2}.`);
} else if (num_1 < num_2) {
    alert(`Task #1. \n ${num_1} is less than ${num_2}.`);
} else {
    alert(`Task #1. \n ${num_1} is equal to ${num_2}.`);
}



//Task #2
let numKm = prompt("Task #2. Please enter the FIRST number (kilometer value).");
let numFt = prompt("Task #2. Please enter the SECOND number (feet value).");

if ((numKm * 1000) > (numFt * 0.305)) {
    alert(`Task #2. \n ${numFt} feet is less than ${numKm} kilometers.`);
} else if ((numKm * 1000) < (numFt * 0.305)) {
    alert(`Task #2. \n ${numKm} kilometers is less than ${numFt} feet.`);
} else {
    alert(`Task #2. \n ${numKm} kilometers is equal to ${numFt} feet.`);
}



//Task #3
let numA = prompt("Task #3. Enter number A:");
let numB = prompt("Task #3. Enter number B:");

if (numB % numA === 0 && numA % numB === 0) {
    alert(`Task #3. \n Number A (${numA}) is a divisor of number B (${numB}). \n Number B (${numB}) is a divisor of number A (${numA}).`);
} 
else if (numB % numA !== 0 && numA % numB === 0) {
    alert(`Task #3. \n Number A (${numA}) is not a divisor of number B (${numB}). \n Number B (${numB}) is a divisor of number A (${numA}).`);
    }
else if (numB % numA === 0 && numA % numB !== 0) {
    alert(`Task #3. \n Number A (${numA}) is a divisor of number B (${numB}). \n Number B (${numB}) is not a divisor of number A (${numA}).`);
}
else {
    alert(`Task #3. \n Number A (${numA}) is not a divisor of number B (${numB}). \n Number B (${numB}) is not a divisor of number A (${numA}).`);
}



//Task #4
let number = prompt("Task #4. Enter number:");
let lastDigit1 = number % 10;

if (lastDigit1 % 2 === 0) {
    alert(`Task #4. \nEntered number: ${number}. \nThe last digit is ${lastDigit1}. \n${lastDigit1} is even.`);
} 
else {
    alert(`Task #4. \nEntered number: ${number}. \nThe last digit is ${lastDigit1}. \n${lastDigit1} is odd.`);
}



//Task #5
let numberDoubleDigit = prompt("Task #5. Enter DOUBLE DIGIT number:");

let firstDigit = +numberDoubleDigit.toString()[0];
let lastDigit = +numberDoubleDigit.toString()[1];

if (firstDigit > lastDigit) {
    alert(`Task #5. \nEntered number: ${numberDoubleDigit}. \n${firstDigit} is greater than ${lastDigit}.`);
} 
else if (firstDigit < lastDigit){
    alert(`Task #5. \nEntered number: ${numberDoubleDigit}. \n${firstDigit} is less than ${lastDigit}.`);
}
else {
    alert(`Task #5. \nEntered number: ${numberDoubleDigit}. \n${firstDigit} is equal to ${lastDigit}.`);
}



//Task #6
let numThreeDigit = prompt("Task #6. Enter THREE-DIGIT number:");

let digit_1 = parseInt(numThreeDigit[0]);
let digit_2 = parseInt(numThreeDigit[1]);
let digit_3 = parseInt(numThreeDigit[2]);

let sum = digit_1 + digit_2 + digit_3;
let multiplication = digit_1 * digit_2 * digit_3;

switch (true) {
    case (sum % 2 === 0) && (sum % 5 === 0) && (multiplication > 100):
        alert(`Task #6. \nEntered number: ${numThreeDigit}. The sum = ${sum}. The multiplication = ${multiplication}. \nThe sum of the digits is even.\nThe sum of the digits is divisible by five.\nThe product of the digits exceeds 100.`);
        break;

    case (sum % 2 === 0) && (sum % 5 === 0):
        alert(`Task #6. \nEntered number: ${numThreeDigit}. The sum = ${sum}. The multiplication = ${multiplication}. \nThe sum of the digits is even.\nThe sum of the digits is divisible by five.\nThe product of the digits does not exceed 100.`);
        break;

    case (sum % 2 === 0) && (multiplication > 100):
        alert(`Task #6. \nEntered number: ${numThreeDigit}. The sum = ${sum}. The multiplication = ${multiplication}. \nThe sum of the digits is even.\nThe sum of the digits is not divisible by five.\nThe product of the digits exceeds 100.`);
        break;

    case (sum % 5 === 0) && (multiplication > 100):
        alert(`Task #6. \nEntered number: ${numThreeDigit}. The sum = ${sum}. The multiplication = ${multiplication}. \nThe sum of the digits is not even.\nThe sum of the digits is divisible by five.\nThe product of the digits exceeds 100.`);
        break;

    case (sum % 2 === 0):
        alert(`Task #6. \nEntered number: ${numThreeDigit}. The sum = ${sum}. The multiplication = ${multiplication}. \nThe sum of the digits is even.\nThe sum of the digits is not divisible by five.\nThe product of the digits does not exceed 100.`);
        break;

    case (sum % 5 === 0):
        alert(`Task #6. \nEntered number: ${numThreeDigit}. The sum = ${sum}. The multiplication = ${multiplication}. \nThe sum of the digits is not even.\nThe sum of the digits is divisible by five.\nThe product of the digits does not exceed 100.`);
        break;

    case (multiplication > 100):
        alert(`Task #6. \nEntered number: ${numThreeDigit}. The sum = ${sum}. The multiplication = ${multiplication}. \nThe sum of the digits is not even.\nThe sum of the digits is not divisible by five.\nThe product of the digits exceeds 100.`);
        break;

    default:
        alert(`Task #6. \nEntered number: ${numThreeDigit}. The sum = ${sum}. The multiplication = ${multiplication}. \nThe sum of the digits is not even.\nThe sum of the digits is not divisible by five.\nThe product of the digits does not exceed 100.`);
        break;
}


// Task #7
let numThreeDigit2 = prompt("Task #7. Enter THREE-DIGIT number:");

let digit_01 = parseInt(numThreeDigit2[0]);
let digit_02 = parseInt(numThreeDigit2[1]);
let digit_03 = parseInt(numThreeDigit2[2]);

if (digit_01 === digit_02 && digit_02 === digit_03) {
    alert(`Task #7. \nEntered number: ${numThreeDigit2}. \n1. All the digits are identical: TRUE. \n2. There are identical digits among the numbers: TRUE.`);
} 
else if (digit_01 === digit_02 || digit_01 === digit_03 || digit_02 === digit_03) {
    alert(`Task #7. \nEntered number: ${numThreeDigit2}. \n1. All the digits are identical: FALSE. \n2. There are identical digits among the numbers: TRUE.`);
} 
else {
    alert(`Task #7. \nEntered number: ${numThreeDigit2}. \n1. All the digits are identical: FALSE. \n2. There are identical digits among the numbers: FALSE.`);
}


//Task #8
let num6 = prompt("Task #8. Enter SIX-DIGIT number:");

let digit1 = parseInt(num6[0]);
let digit2 = parseInt(num6[1]);
let digit3 = parseInt(num6[2]);
let digit4 = parseInt(num6[3]);
let digit5 = parseInt(num6[4]);
let digit6 = parseInt(num6[5]);

if (digit1 === digit6 && digit2 === digit5 && digit3 === digit4) {
    alert(`Task #8. \nEntered number: ${num6}. \nIs the given six-digit number a palindrome? TRUE.`);
} 
else {
    alert(`Task #8. \nEntered number: ${num6}. \nIs the given six-digit number a palindrome? FALSE.`);
}


