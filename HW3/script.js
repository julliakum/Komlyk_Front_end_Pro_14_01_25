//Task #1
let name = prompt("Task #1. What is your name?");
alert(`Hello, ${name}. How are you?`)


//Task #2
let num_1 = Number(prompt("Task #2. Please enter the FIRST number."));
let num_2 = Number(prompt("Task #2. Please enter the SECOND number."));

let sum = num_1 + num_2;
let difference = num_1 - num_2;
let multiplication = num_1 * num_2;
let division = num_2 !== 0 ? num_1 / num_2 : "Task #2. Division by zero is not allowed.";

alert(`Task #2. Entered data:
    The FIRST number is: ${num_1}.
    The SECOND number is: ${num_2}.

    The calculated result is:
    Sum: ${sum}.
    Difference: ${difference}.
    Multiplication: ${multiplication}.
    Division: ${division}.
`);


//Task #3
let value_1 = prompt("Task #3. Please enter the FIRST value.");
let value_2 = prompt("Task #3. Please enter the SECOND value.");

let comparison = (value_1 == value_2);
let comparisonResult = comparison.toString().toUpperCase();

alert(`Task #3. Entered data:
    The FIRST value is: ${value_1}.
    The SECOND value is: ${value_2}.

    The comparison result is: ${comparisonResult}.
`);


// Task #4
let digit_1 = Number(prompt("Task #4. Please enter the FIRST number."));
let digit_2 = Number(prompt("Task #4. Please enter the SECOND number."));
let digit_3 = Number(prompt("Task #4. Please enter the THIRD number."));

let mean = (digit_1 + digit_2 + digit_3) / 3;

alert(`Task #4. Entered data:
    The FIRST number is: ${digit_1}.
    The SECOND number is: ${digit_2}.
    The THIRD number is: ${digit_3}.
    
    The arithmetic mean result is: ${mean}.
`);


//Task #5
let number = prompt("Task #5. Please Enter a FIVE-DIGIT number.");

//Method 1
let number_1_v1 = parseInt(number.at(0)) % 10;
let number_2_v1 = parseInt(number.at(1)) % 10;
let number_3_v1 = parseInt(number.at(2)) % 10;
let number_4_v1 = parseInt(number.at(3)) % 10;
let number_5_v1 = parseInt(number.at(4)) % 10;

//Method 2
let number_1_v2 = parseInt(number / 10000);
let number_2_v2 = parseInt((number % 10000) / 1000);
let number_3_v2 = parseInt((number % 1000) / 100);
let number_4_v2 = parseInt((number % 100) / 10);
let number_5_v2 = number % 10;

let numberResConcat = number_1_v2.toString() + ' '
    .concat(number_2_v2.toString()) + ' '
    .concat(number_3_v2.toString()) + ' '
    .concat(number_4_v2.toString()) + ' '
    .concat(number_5_v2.toString());


alert(`Task #5. Entered data:
    Your entered number is: ${number}.
    
    Method 1: ${number_1_v1} ${number_2_v1} ${number_3_v1} ${number_4_v1} ${number_5_v1}.

    Method 2: ${numberResConcat}.
`);

