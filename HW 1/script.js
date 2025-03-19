// Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією. 
// При зникненні фокуса - так само пропадає
const inputField = document.querySelector('.input-field');
const infoBox = document.querySelector('.info-box');

inputField.addEventListener('focus', () => {
    infoBox.style.display = 'block';
});

inputField.addEventListener('blur', () => {
    infoBox.style.display = 'none';
});


// На сторінці є дві кнопки. При натисканні на першу кнопку просимо користувача ввести в prompt посилання, 
// при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням). 
// Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо
let userLink = '';

document.getElementById('set-link').addEventListener('click', () => {
    const input = prompt('Enter a URL:');
    if (input) {
        userLink = input.startsWith('http://') || input.startsWith('https://') ? input : 'https://' + input;
    }
});

document.getElementById('go-link').addEventListener('click', () => {
    if (userLink) {
        window.location.href = userLink;
    } else {
        alert('No URL entered. Please enter a URL first.');
    }
});


// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector('.dynamic-table');
    let number = 1;
    for (let i = 0; i < 10; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement("td");
        cell.textContent = number++;
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  });


// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
// Вивести зображення з цієї папки отримане випадковим чином (Math.random)
const imageElement = document.getElementById("random-image");
const randomNumber = Math.floor(Math.random() * 9) + 1;
imageElement.src = `images/${randomNumber}.jpg`;
