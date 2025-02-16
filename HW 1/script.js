//Створити масив, довжину та елементи якого задає користувач. 
let arr = [1, 20, 11, 111, 9, 86, 987, 367, 847, 5, 3, 56];
console.log(arr)

//Потім відсортувати масив за зростанням.
arr.sort((a, b) => a - b);
console.log(arr)

//Потім видалити елементи з масиву з 2 по 4 (включно).
arr.splice(1, 3);
console.log(arr);




let array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(array);
// Знайти суму та кількість позитивних елементів.
let positiveNum = array.filter(num => num > 0);
let positiveSum = positiveNum.reduce((sum, num) => sum + num, 0);
let countPositive = positiveNum.length;

console.log("Сума позитивних елементів:", positiveSum);
console.log("Кількість позитивних елементів:", countPositive);



// Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = Math.min(...array);
let minIndex = array.indexOf(minElement);
let orderNumberMin = minIndex + 1;

console.log("Мінімальний елемент:", minElement);
console.log("Індекс мінімального елементу:", minIndex);
console.log("Порядковий номер мінімального елементу:", orderNumberMin);



// Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = Math.max(...array);
let maxIndex = array.indexOf(maxElement);
let orderNumberMax = maxIndex + 1;

console.log("Максимальний елемент:", maxElement);
console.log("Індекс максимального елементу:", maxIndex);
console.log("Порядковий номер максимального елементу:", orderNumberMax);



// Визначити кількість негативних елементів.
let negativeNum = array.filter(num => num < 0);
let countNegative = negativeNum.length;

console.log("Кількість негативних елементів:", countNegative);



// Знайти кількість непарних позитивних елементів.
let oddPositiveNumbers = array.filter(num => num > 0 && num % 2 !== 0);
let countOddPositive = oddPositiveNumbers.length;

console.log("Кількість непарних позитивних елементів:", countOddPositive);



// Визначити кількість парних позитивних елементів.
let evenPositiveNumbers = array.filter(num => num > 0 && num % 2 === 0);
let countEvenPositive = evenPositiveNumbers.length;

console.log("Кількість парних позитивних елементів:", countEvenPositive);



// Знайти суму парних позитивних елементів.
let evenPositiveNumbers1 = array.filter(num => num > 0 && num % 2 === 0);
let sumEvenPositiveNumbers = evenPositiveNumbers1.reduce((sum, num) => sum + num, 0);

console.log("Сума парних позитивних елементів:", sumEvenPositiveNumbers);



// Знайти суму непарних позитивних елементів.
let oddPositiveNumbers1 = array.filter(num => num > 0 && num % 2 !== 0);
let sumOddPositiveNumbers = oddPositiveNumbers1.reduce((sum, num) => sum + num, 0);

console.log("Сума непарних позитивних елементів:", sumOddPositiveNumbers);



// Знайти добуток позитивних елементів.
let positiveNumbers = array.filter(num => num > 0);
let productPositiveNumbers = positiveNumbers.reduce((product, num) => product * num, 1);

console.log("Добуток позитивних елементів:", productPositiveNumbers);



// Знайти найбільший серед елементів масиву, решту занулити.
let maxElement1 = Math.max(...array);
let newArray1 = array.map(num => (num === maxElement1 ? num : 0));

console.log("Масив з найбільшим числом та нулями:", newArray1);


//Якщо треба видалити всі елементи крім найбільшого, то можна так:
let newArray2 = array.filter(num => num === maxElement);

console.log("Масив з найбільшим числом, без інших елементів:", newArray2);
