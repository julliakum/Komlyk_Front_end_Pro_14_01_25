// Написати функцію, яка приймає один параметр. 
// При першому виклику вона запам'ятовує його, при другому — підсумовує переданий параметр з тим, 
// що передали перший раз і тд. Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28

function makeSum() {
    let total = 0;

    return function(value) {
        total += value;
        return total;
    };
}

const sumFunction = makeSum();

console.log(sumFunction(3));
console.log(sumFunction(5));
console.log(sumFunction(20));



// Даний масив з елементами різних типів. 
// Створити функцію, яка вираховує середнє арифметичне лише числових елементів даного масиву.

function averageOfNumbers(arr) {
    let numbers = arr.filter(item => typeof item === 'number');
    if (numbers.length === 0) return 0;
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

const mixedArray = [10, 'hello world', 20, null, 30, 40, 50, true, false, undefined];
console.log("Average of numbers", averageOfNumbers(mixedArray));



// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak. 
// У змінній znak може бути значення +, -, *, /, %, ^ (ступінь). 
// Вивести результат математичної дії, вказаної у змінній znak. Обидва числа та знак виходять від користувача.

function doCalculation(x, znak, y) {
    switch (znak) {
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return y !== 0 ? x / y : 'Division by zero!';
        case '%': return x % y;
        case '^': return Math.pow(x, y);
        default: return 'Unknown sign';
    }
}

const x = parseFloat(prompt("Enter the first number:"));
const znak = prompt("Enter a mathematical operator (+, -, *, /, %, ^):");
const y = parseFloat(prompt("Enter the second number:"));

console.log("Calculated value:", doCalculation(x, znak, y));



// Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву та внутрішніх масивів задає користувач. 
// Значення всіх елементів масивів задає користувач.

function fillTwoDimensionalArray() {
    const rows = parseInt(prompt("Enter the number of rows:"));
    const cols = parseInt(prompt("Enter the number of columns:"));
    
    let array = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(prompt(`Enter a value for the item [${i}][${j}]:`));
        }
        array.push(row);
    }
    
    return array;
}

const userArray = fillTwoDimensionalArray();
console.log(userArray);



// Створити функцію, яка видаляє з рядка всі символи, які ми передали другим аргументом. 
// 'func("hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач

function removeCharacters(string, symbolsToRemove) {
    return string.split('').filter(char => !symbolsToRemove.includes(char)).join('');
}

const inputString = prompt("Enter a string:");
const symbolsToDelete = prompt("Enter the symbols to be removed after the comma:").split(',');
const resultString = removeCharacters(inputString, symbolsToDelete);

console.log(`Input string: "${inputString}"
Symbols to delete: [${symbolsToDelete.join(', ')}]
Result: "${resultString}"`);