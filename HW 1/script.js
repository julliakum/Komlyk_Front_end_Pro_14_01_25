const store = {
    "Гаджети": [
        { id: 1, name: "Смартфон", price: 8000 },
        { id: 2, name: "Ноутбук", price: 25000 },
        { id: 3, name: "Планшет", price: 13000 },
        { id: 4, name: "Смарт-годинник", price: 5000 }
    ],
    "Побутова техніка": [
        { id: 5, name: "Пральна машина", price: 21000 },
        { id: 6, name: "Робот-пилосос", price: 5000 },
        { id: 7, name: "Аерогриль", price: 10000 },
        { id: 8, name: "Чайник", price: 2000 }
    ],
    "Текстиль": [
        { id: 9, name: "Ковдра", price: 3500 },
        { id: 10, name: "Подушка", price: 700 },
        { id: 11, name: "Постіль", price: 2000 },
        { id: 12, name: "Плед", price: 1500 }
    ]
};

console.log("Список товарів магазину:");
Object.keys(store).forEach(category => {
    console.log(`\nКатегорія товару: ${category}`);
    store[category].forEach(product => {
        console.log(`${product.id}. ${product.name} - ${product.price} грн`);
    });
});

// Вибір категорії
const categoryNames = Object.keys(store);
let categoryChoice;
do {
    categoryChoice = prompt(`Оберіть категорію:\n${categoryNames.join(", ")}`).trim().toLowerCase();
} while (!categoryNames.some(cat => cat.toLowerCase() === categoryChoice));

categoryChoice = categoryNames.find(cat => cat.toLowerCase() === categoryChoice);

// Вибір ID продукту
let productId;
do {
    productId = Number(prompt("Введіть ID номер товару:"));
} while (isNaN(productId) || !Number.isInteger(productId) || productId <= 0 || !store[categoryChoice].some(product => product.id === productId));

const product = store[categoryChoice].find(product => product.id === productId);

// Вибір кількості товарів
let quantity;
do {
    quantity = Number(prompt("Введіть кількість товару:"));
} while (isNaN(quantity) || !Number.isInteger(quantity) || quantity <= 0);

// Вартість покупки
let totalPrice = product.price * quantity;
let discount = 0;
if (totalPrice > 10000) {
    discount = totalPrice * 0.2;
}
let finalPrice = totalPrice - discount;

// Вивід підсумкової вартості
const resultMessage = `Загалом обрано: ${product.name} ${quantity} шт. (категорія "${categoryChoice}"). \n` +
    `Сума замовлення: ${totalPrice} грн. \n` +
    `${discount > 0 ? `Сума знижки (20%): ${discount} грн. \n` : ""}` +
    `Кінцева вартість: ${finalPrice} грн.`;

document.body.innerHTML = `<h2>${resultMessage}</h2>`;
alert(resultMessage);
