// Вивести на сторінку в один рядок через кому числа від 10 до 20
// Using cycle For
let result_1 = "";

for (let i = 10; i <= 20; i++) {
    result_1 += i;
    if (i < 20) {
        result_1 += ", ";
    }
}

console.log(result_1);

//Using cycle While:
let result_1_1 = "";
let i = 10;

while (i <= 20) {
    result_1_1 += i;
    if (i < 20) {
        result_1_1 += ", ";
    }
    i++;
}

console.log(result_1_1);



// Вивести квадрати чисел від 10 до 20
// Using cycle For
let result_2 = "";

for (let i = 10; i <= 20; i++) {
    result_2 += i * i;
    if (i < 20) {
        result_2 += ", ";
    }
}

console.log(result_2);

//Using cycle While:
let result_2_2 = "";
let l = 10;

while (l <= 20) {
    result_2_2 += l * l;
    if (l < 20) {
        result_2_2 += ", ";
    }
    l++;
}

console.log(result_2_2);




// Вивести таблицю множення на 7
let result_3 = "";

for (let i = 1; i <= 10; i++) {
    result_3 += `7 * ${i} = ${7 * i}\n`;
}

console.log(result_3);



// Знайти суму всіх цілих чисел від 1 до 15
// Using cycle For
let result_4 = 0;

for (let i = 1; i <= 15; i++) {
    result_4 += i;
}

console.log("Sum of all numbers from 1 to 15:", result_4);

//Using cycle While:
let result_4_4 = 0;
let m = 1;

while (m <= 15) {
    result_4_4 += m;
    m++;
}

console.log("Sum of all numbers from 1 to 15:", result_4_4);




//Знайти добуток усіх цілих чисел від 15 до 35
let result_5 = 1;

for (let i = 15; i <= 35; i++) {
    result_5 *= i;
}

console.log("The product of all numbers from 15 to 35:", result_5);



//Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let sum = 0;
let count = 0;

for (let i = 1; i <= 500; i++) {
    sum += i;
    count++;
}

let average = sum / count;

console.log("Arithmetic average of numbers from 1 to 500:", average);



//Вивести суму лише парних чисел у діапазоні від 30 до 80
let result_7 = 0;

for (let i = 30; i <= 80; i += 2) {
    result_7 += i;
}

console.log("The sum of even numbers from 30 to 80:", result_7);



//Вивести всі числа в діапазоні від 100 до 200, які кратні 3
let result_8 = "";

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        result_8 += i + ", ";
    }
}

console.log("Numbers that are multiples of 3 in the range 100-200:\n", result_8.slice(0, -2));



//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let number_1 = prompt("Enter a natural number:");
number_1 = Number(number_1);

if (Number.isInteger(number_1) && number_1 > 0) {
    let result_9 = "Divisors of a number " + number_1 + ": ";

    for (let i = 1; i <= number_1; i++) {
        if (number_1 % i === 0) {
            result_9 += i + " ";
        }
    }

    console.log(result_9);
} else {

    console.log("Please enter a natural number.");
}



//Дано натуральне число. Визначити кількість його парних дільників
if (Number.isInteger(number_1) && number_1 > 0) {
    let count = 0;

    for (let i = 1; i <= number_1; i++) {
        if (number_1 % i === 0 && i % 2 === 0) {
            count++;
        }
    }

    console.log("The number of even divisors of a number", number_1, ":", count);
} else {
    console.log("Please enter a natural number.");
}



//Дано натуральне число. Знайти суму його парних дільників
if (Number.isInteger(number_1) && number_1 > 0) {
    let sum = 0;

    for (let i = 1; i <= number_1; i++) {
        if (number_1 % i === 0 && i % 2 === 0) {
            sum += i;
        }
    }

    console.log("The sum of even divisors of a number", number_1, ":", sum);
} else {
    console.log("Please enter a natural number.");
}



//Надрукувати повну таблицю множення від 1 до 10
let table = {};

for (let i = 1; i <= 10; i++) {
    let row = {};
    for (let j = 1; j <= 10; j++) {
        row[j] = i * j;
    }
    table[i] = row;
}

console.table(table);