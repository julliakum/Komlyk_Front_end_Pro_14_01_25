const store = {
    "Гаджети": [
        { id: 1, name: "Смартфон", price: 8000, desc: "Сучасний смартфон з AMOLED-екраном, потужним процесором і високоякісною камерою. З ним ваші знімки вийдуть на новий рівень, а великий обсяг пам'яті збереже всі ваші дані." },
        { id: 2, name: "Ноутбук", price: 25000, desc: "Потужний ноутбук з процесором AMD Ryzen 5 (5000 Series), внутнішньою пам'яттю на 512 ГБ та 16 ГБ оперативної пам’яті. Підходить для роботи, навчання, а також гарний у іграх." },
        { id: 3, name: "Планшет", price: 13000, desc: "Планшет із яскравим 10-дюймовим AMOLED-екраном і підтримкою стилуса. Ідеальний для перегляду відео, читання або нотаток." },
        { id: 4, name: "Смарт-годинник", price: 5000, desc: "Смарт-годинник із датчиком пульсу, крокоміром, відстеженням сну та повідомленнями з телефону. Ідеальний для відстеження фізичної активності та стеження за станом здоров'я." }
    ],
    "Побутова техніка": [
        { id: 5, name: "Пральна машина", price: 21000, desc: "Енергоефективна та тиха пральна машина з об'ємом 7 кг. Має 10 режимів прання, а також функцію відкладеного старту." },
        { id: 6, name: "Робот-пилосос", price: 5000, desc: "Розумний робот-пилосос з навігацією, сенсорами перешкод та додатком для керування з телефону. Поки ви відпочиваєте, цей незамінний помічник прибере всю територію." },
        { id: 7, name: "Аерогриль", price: 10000, desc: "Багатофункціональний аерогриль для приготування здорових страв без олії. З ним м’ясо, овочі, картопля фрі та випічка будуть приготовані швидко та з невеликою кількістю олії." },
        { id: 8, name: "Чайник", price: 2000, desc: "Електричний чайник з загартованого скла, об’ємом 1.7 л, захистом від перегріву та автоматичним вимкненням, а також синьою підсвіткою." }
    ],
    "Текстиль": [
        { id: 9, name: "Ковдра", price: 3500, desc: "М’яка та тепла зимова ковдра з гіпоалергенною начинкою. Зберігає тепло навіть у найлютіші морози." },
        { id: 10, name: "Подушка", price: 700, desc: "Ортопедична подушка з ефектом пам’яті для правильної підтримки шиї та хребта. Забезпечує комфортний сон і знімає напругу." },
        { id: 11, name: "Постіль", price: 2000, desc: "Комплект постільної білизни з 100% бавовни, приємний на дотик, не втрачає кольору після прання." },
        { id: 12, name: "Плед", price: 1500, desc: "Затишний флісовий плед, легкий і теплий. Підійде для вечорів на дивані, пікніків або в подорож. Легко переться і швидко сохне." }
    ]
};

const categoriesContainer = document.getElementById("categories");
const productsContainer = document.getElementById("products");
const detailsContainer = document.getElementById("product-details");

const middlePanel = document.querySelector(".middle");
const rightPanel = document.querySelector(".right");

const middleTitle = middlePanel.querySelector("h2");
const rightTitle = rightPanel.querySelector("h2");


middlePanel.style.display = "none";
rightPanel.style.display = "none";

function renderCategories() {
    for (const category in store) {
        const li = document.createElement("li");
        li.textContent = category;
        li.classList.add("category-item");
        li.onclick = () => renderProducts(category);
        categoriesContainer.appendChild(li);
    }
}

function renderProducts(category) {
    productsContainer.innerHTML = "";
    detailsContainer.innerHTML = "";
    rightPanel.style.display = "none";

    store[category].forEach(product => {
        const li = document.createElement("li");
        li.textContent = product.name;
        li.classList.add("product-item");
        li.onclick = () => renderDetails(product);
        productsContainer.appendChild(li);
    });

    middlePanel.style.display = "block";
}

function renderDetails(product) {
    detailsContainer.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <p>Ціна: ${product.price} грн.</p>
      <button onclick="buyProduct()">Купити</button>
    `;
    rightPanel.style.display = "block";
}

function buyProduct() {
    detailsContainer.innerHTML = `
      <p>Дякуємо за покупку!</p>
      <button onclick="resetView()">Повернутися</button>
    `;
}

function resetView() {
    productsContainer.innerHTML = "";
    detailsContainer.innerHTML = "";
    middlePanel.style.display = "none";
    rightPanel.style.display = "none";
}

renderCategories();
