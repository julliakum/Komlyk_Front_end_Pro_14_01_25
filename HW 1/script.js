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
const buyButtonWrapper = document.getElementById("buy-button-wrapper");

const middlePanel = document.querySelector(".middle");
const rightPanel = document.querySelector(".right");

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
  buyButtonWrapper.innerHTML = "";
  document.getElementById("order-section").classList.add("hidden");
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
  `;
  buyButtonWrapper.innerHTML = `<button id="buy-button">Купити</button>`;
  document.getElementById("order-section").classList.add("hidden");

  document.getElementById("order-form").classList.remove("hidden");
  buyButtonWrapper.classList.remove("hidden");

  document.getElementById("buy-button").addEventListener("click", buyProduct);
  rightPanel.style.display = "block";
}

function buyProduct() {
  const orderForm = document.getElementById("order-form");
  const orderResult = document.getElementById("order-result");

  orderForm.reset();
  orderResult.innerHTML = "";
  document.getElementById("order-section").classList.remove("hidden");
  buyButtonWrapper.classList.add("hidden");
}

function resetView() {
  productsContainer.innerHTML = "";
  detailsContainer.innerHTML = "";
  buyButtonWrapper.innerHTML = "";
  document.getElementById("order-section").classList.add("hidden");
  middlePanel.style.display = "none";
  rightPanel.style.display = "none";
}

renderCategories();

document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const city = document.getElementById("city").value;
  const warehouse = document.getElementById("warehouse").value.trim();
  const payment = document.getElementById("payment").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const comment = document.getElementById("comment").value.trim();

  if (!name || !city || !warehouse || !payment || quantity < 1) {
      document.getElementById("order-result").textContent =
          "Будь ласка, заповніть всі обов'язкові поля.";
      return;
  }

  const productName = document.querySelector("#product-details h3")?.textContent || "";
  const priceText = document.querySelector("#product-details p:nth-of-type(2)")?.textContent || "";
  const productPrice = parseInt(priceText.replace(/\D/g, ""));
  const total = productPrice * quantity;

  document.getElementById("order-result").innerHTML = `
    <h4>Ваше замовлення:</h4>
    <p><strong>Товар:</strong> ${productName}</p>
    <p><strong>Ціна за одиницю:</strong> ${productPrice} грн.</p>
    <p><strong>Кількість:</strong> ${quantity}</p>
    <p><strong>Сума:</strong> ${total} грн.</p>
    <p><strong>ПІБ:</strong> ${name}</p>
    <p><strong>Місто:</strong> ${city}</p>
    <p><strong>Склад Нової пошти:</strong> ${warehouse}</p>
    <p><strong>Оплата:</strong> ${payment}</p>
    <p><strong>Коментар:</strong> ${comment || "(немає)"}</p>
  `;

  document.getElementById("order-form").classList.add("hidden");
});



const categoriesTitle = document.querySelector(".categories-details h2");
const myOrdersBtn = document.getElementById("my-orders-btn");
const ordersListWrapper = document.getElementById("orders-list-wrapper");

myOrdersBtn.addEventListener("click", () => {
  const isOrdersVisible = ordersListWrapper.classList.contains("hidden") === false;
  
  categoriesContainer.classList.toggle("hidden");
  categoriesTitle.style.display = isOrdersVisible ? "block" : "none";
  middlePanel.style.display = "none";
  rightPanel.style.display = "none";
  ordersListWrapper.classList.toggle("hidden");

  if (!ordersListWrapper.classList.contains("hidden")) {
    renderOrders();
  }
});


function saveOrder(order) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
}

function renderOrders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (!orders.length) {
    ordersListWrapper.innerHTML = "<p>Замовлення відсутні.</p>";
    return;
  }

  const list = document.createElement("ul");

  orders.forEach((order, index) => {
    const item = document.createElement("li");
    item.classList.add("order-item");

    item.innerHTML = `
      <div class="order-header">
        <span><strong>${new Date(order.date).toLocaleString()}</strong>: ${order.productName} - ${order.total} грн.</span>
        <button class="delete-order" data-index="${index}">Видалити</button>
      </div>
      <div class="order-details hidden">
        <p><strong>Ціна за одиницю:</strong> ${order.productPrice} грн.</p>
        <p><strong>Кількість:</strong> ${order.quantity}</p>
        <p><strong>ПІБ:</strong> ${order.name}</p>
        <p><strong>Місто:</strong> ${order.city}</p>
        <p><strong>Склад Нової пошти:</strong> ${order.warehouse}</p>
        <p><strong>Оплата:</strong> ${order.payment}</p>
        <p><strong>Коментар:</strong> ${order.comment || "(немає)"}</p>
      </div>
    `;

    item.querySelector(".order-header").addEventListener("click", () => {
      item.querySelector(".order-details").classList.toggle("hidden");
    });

    item.querySelector(".delete-order").addEventListener("click", (e) => {
      e.stopPropagation();
      deleteOrder(index);
    });

    list.appendChild(item);
  });

  ordersListWrapper.innerHTML = "";
  ordersListWrapper.appendChild(list);
}

function deleteOrder(index) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.splice(index, 1);
  localStorage.setItem("orders", JSON.stringify(orders));
  renderOrders();
}


document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const city = document.getElementById("city").value;
  const warehouse = document.getElementById("warehouse").value.trim();
  const payment = document.getElementById("payment").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const comment = document.getElementById("comment").value.trim();

  if (!name || !city || !warehouse || !payment || quantity < 1) {
    document.getElementById("order-result").textContent =
      "Будь ласка, заповніть всі обов'язкові поля.";
    return;
  }

  const productName = document.querySelector("#product-details h3")?.textContent || "";
  const priceText = document.querySelector("#product-details p:nth-of-type(2)")?.textContent || "";
  const productPrice = parseInt(priceText.replace(/\D/g, ""));
  const total = productPrice * quantity;

  const order = {
    date: new Date().toISOString(),
    productName,
    productPrice,
    quantity,
    total,
    name,
    city,
    warehouse,
    payment,
    comment,
  };

  saveOrder(order);
});
