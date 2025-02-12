//Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)
//Using cycle For:
let result_1 = "";

for (let i = 20; i <= 30; i += 0.5) {
    result_1 += i + " ";
}

console.log(result_1.trim());

//Using cycle While:
let result_1_1 = "";
let i = 20;

while (i <= 30) {
    result_1_1 += i + " ";
    i += 0.5;
}

console.log(result_1_1.trim());

// Using cycle Do...While:
let result_1_2 = "";
let l = 20;

do {
    result_1_2 += l + " ";
    l += 0.5;
} while (l <= 30);

console.log(result_1_2.trim());




//Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
let rate = 40;
let result_2 = "";

for (let dollars = 10; dollars <= 100; dollars += 10) {
    result_2 += `${dollars} USD = ${dollars * rate} грн\n`;
}

console.log(result_2.trim());



//Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
let N = prompt("Task #3. Enter number N:");
N = Number(N);

let result_3 = "";

for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        result_3 += i + " ";
    } else {
        break;
    }
}

console.log("Numbers whose square does not exceed", N, ":", result_3.trim());



//Дано ціле число. З'ясувати, чи воно простим (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе).
let Num = prompt("Task #4. Enter an integer:");
Num = Number(Num);

let isPrime = true;
if (Num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < Num; i++) {
        if (Num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(Num, isPrime ? "is a prime number." : "is not a prime number.");




//Дано деяке число. Ваше завдання – визначити, чи можна отримати це число, піднявши число 3 до певного натурального ступеня. (Як приклад, числа 9 та 81 можна отримати цим способом, але 13 – ні.)
let Numb = prompt("Task #5. Enter an integer:");
Number = Number(Numb);

let isPowerOfThree = true;

if (Numb < 1) {
    isPowerOfThree = false;
} else {
    while (Numb > 1) {
        if (Numb % 3 !== 0) {
            isPowerOfThree = false;
            break;
        }
        Numb /= 3;
    }
}

console.log(isPowerOfThree ? `Yes, the number ${Numb} can be obtained as 3ⁿ` : `No, the number ${Numb} is not a power of 3.`);

