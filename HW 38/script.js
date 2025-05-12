const categoriesData = {
    'Основні страви': [
        {
            id: 1,
            name: 'Карбонара',
            weight: '300 г',
            price: 164,
            image: 'https://picsum.photos/200?random=1',
            description: 'Паста зі смаженим беконом, чорним перцем, сиром та яйцем',
            ingredients: ['бекон', 'чорний перець', 'сир', 'яйце'],
            sauces: ['Соєвий соус (+5 ₴)']
        },
        {
            id: 2,
            name: 'Різото',
            weight: '200 г',
            price: 124,
            image: 'https://picsum.photos/200?random=2',
            description: 'Рис з морепродуктами та овочами',
            ingredients: ['морепродукти (креветка, кальмар, мідії)', 'овочі'],
            sauces: ['Соєвий соус (+5 ₴)']
        },
        {
            id: 3,
            name: 'Соба з куркою',
            weight: '240 г',
            price: 150,
            image: 'https://picsum.photos/200?random=3',
            description: 'Гречана лапша, курка, овочі, кунжут',
            ingredients: ['курка', 'овочі (морква, болгарський перець)', 'кунжут'],
            sauces: ['Соєвий соус (+5 ₴)', 'Імбир (+5 ₴)', 'Васабі (+10 ₴)']
        }
    ],
    'Бургери та сендвічі': [
        {
            id: 4,
            name: 'Кентукі Бургер',
            weight: '290 г',
            price: 178,
            image: 'https://picsum.photos/200?random=4',
            description: 'Курячий бургер з сиром Моцарела, соусом \"Медово-гірчичний\" і свіжим яблуком',
            ingredients: ['курка', 'сир Моцарела', 'яблуко'],
            sauces: ['Картопля фрі (+40 ₴)', 'Соус Дорблю (+25 ₴)'],
            addons: [{ name: 'Картопля фрі (+40 ₴)', price: 40 }]
        },
        {
            id: 5,
            name: 'Чізбургер',
            weight: '250 г',
            price: 197,
            image: 'https://picsum.photos/200?random=5',
            description: 'Яловичий бургер з сиром, салатом, огірком і цибулею',
            ingredients: ['котлета', 'салат', 'огірок', 'цибуля'],
            sauces: ['Картопля фрі (+40 ₴)', 'Соус Дорблю (+25 ₴)'],
            addons: [{ name: 'Картопля фрі (+40 ₴)', price: 40 }]
        },
        {
            id: 6,
            name: 'Сендвіч Пепер Джек',
            weight: '280 г',
            price: 163,
            image: 'https://picsum.photos/200?random=6',
            description: 'З куркою в клярі, халапеньо, сиром, салатом Айсберг та соусом Барбекю',
            ingredients: ['курка', 'халапеньо', 'сир', 'салат Айсберг'],
            sauces: ['Картопля фрі (+40 ₴)', 'Соус Дорблю (+25 ₴)'],
            addons: [{ name: 'Картопля фрі (+40 ₴)', price: 40 }]
        }
    ],
    'Десерти': [
        {
            id: 7,
            name: 'Чізкейк Нью Йорк',
            weight: '120 г',
            price: 133,
            image: 'https://picsum.photos/200?random=7',
            description: 'Класичний чізкейк з ванільним морозивом',
            ingredients: ['ванільне морозиво'],
            sauces: ['Шоколадний топінг (+15 ₴)', 'Карамельний топінг (+13 ₴)']
        },
        {
            id: 8,
            name: 'Чізкейк Орео',
            weight: '120 г',
            price: 133,
            image: 'https://picsum.photos/200?random=8',
            description: 'Чізкейк з печивом Орео та ванільним морозивом',
            ingredients: ['ванільне морозиво'],
            sauces: ['Шоколадний топінг (+15 ₴)', 'Карамельний топінг (+13 ₴)']
        },
        {
            id: 9,
            name: 'Черрі Пай',
            weight: '120 г',
            price: 125,
            image: 'https://picsum.photos/200?random=9',
            description: 'Шоколадний десерт з вишнею і сиром',
            ingredients: ['ванільне морозиво'],
            sauces: ['Шоколадний топінг (+15 ₴)', 'Карамельний топінг (+13 ₴)']
        }
    ]
};

const additionsPrices = {
    'Соєвий соус': 5,
    'Імбир': 5,
    'Васабі': 10,
    'Картопля фрі': 40,
    'Соус Дорблю': 25,
    'Шоколадний топінг': 15,
    'Карамельний топінг': 13
};

let selectedProduct = null;
let cart = [];

function renderCategories() {
    const categoriesContainer = document.getElementById('categories');
    categoriesContainer.innerHTML = '';
    Object.keys(categoriesData).forEach(category => {
        const button = document.createElement('button');
        button.className = 'btn btn-outline-light category-btn';
        button.textContent = category;
        button.onclick = () => renderProducts(category, button);
        categoriesContainer.appendChild(button);
    });
}

function renderProducts(category, clickedButton) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
    document.getElementById('category-title').textContent = category;

    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    categoriesData[category].forEach(product => {
        const column = document.createElement('div');
        column.className = 'col-md-4';
        column.innerHTML = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" class="img-fluid">
        <div class="mt-3">
          <div class="price text-warning">${product.price} ₴</div>
          <div class="weight">${product.weight}</div>
          <h5 class="mt-2">${product.name}</h5>
          <button class="btn btn-warning mt-2 w-100" onclick='openModal(${JSON.stringify(product).replace(/'/g, "\\'")})'>🛒</button>
        </div>
      </div>
    `;
        productsContainer.appendChild(column);
    });
}

function openModal(product) {
    selectedProduct = product;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalDescription').innerHTML = `<span class='fw-semibold text-warning'>Опис:</span> ${product.description}`;
    document.getElementById('modalWeight').innerHTML = `<span class='fw-semibold text-warning'>Вага:</span> ${product.weight}`;
    document.getElementById('modalPrice').innerHTML = `<span class='fw-semibold text-warning'>Вартість:</span> ${product.price} грн`;
    document.getElementById('quantityInput').value = 1;

    const ingredientsContainer = document.getElementById('ingredientsContainer');
    ingredientsContainer.innerHTML = '';
    product.ingredients.forEach(ingredient => {
        ingredientsContainer.innerHTML += `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="${ingredient}" checked id="ingredient-${ingredient}">
        <label class="form-check-label" for="ingredient-${ingredient}">${ingredient}</label>
      </div>`;
    });

    const saucesContainer = document.getElementById('saucesContainer');
    saucesContainer.innerHTML = '';
    if (product.sauces) {
        product.sauces.forEach(sauceStr => {
            const cleanName = sauceStr.split(' (+')[0];
            saucesContainer.innerHTML += `
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="${cleanName}" id="sauce-${cleanName}">
          <label class="form-check-label" for="sauce-${cleanName}">${sauceStr}</label>
        </div>`;
        });
    }

    bootstrap.Modal.getOrCreateInstance(document.getElementById('editModal')).show();
}

function changeQuantity(delta) {
    const input = document.getElementById('quantityInput');
    let current = parseInt(input.value);
    current += delta;
    if (current < 1) current = 1;
    input.value = current;
}

function getAdditionsCost(additions = []) {
    return additions.reduce((sum, add) => sum + (additionsPrices[add] || 0), 0);
}

function formatAdditionsWithPrices(additions) {
    return additions.map(a => `${a} (+${additionsPrices[a] || 0} ₴)`).join(', ');
}

document.getElementById('editForm').onsubmit = function (event) {
    event.preventDefault();
    const quantity = parseInt(document.getElementById('quantityInput').value);
    const selectedIngredients = Array.from(document.querySelectorAll('#ingredientsContainer input:checked')).map(i => i.value);
    const selectedAdditions = Array.from(document.querySelectorAll('#saucesContainer input:checked')).map(s => s.value);
    const additionsCost = getAdditionsCost(selectedAdditions);
    const totalPrice = (selectedProduct.price + additionsCost) * quantity;

    const existingItem = cart.find(item =>
        item.name === selectedProduct.name &&
        JSON.stringify(item.ingredients) === JSON.stringify(selectedIngredients) &&
        JSON.stringify(item.additions) === JSON.stringify(selectedAdditions)
    );

    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice += totalPrice;
    } else {
        cart.push({
            name: selectedProduct.name,
            price: selectedProduct.price,
            ingredients: selectedIngredients,
            additions: selectedAdditions,
            quantity,
            totalPrice
        });
    }

    updateCartDisplay();
    bootstrap.Modal.getOrCreateInstance(document.getElementById('editModal')).hide();
};

function toggleCart() {
    const cartBlock = document.getElementById('cart');
    cartBlock.classList.toggle('d-none');
    cartBlock.scrollIntoView({ behavior: 'smooth' });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCounter = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    cartItemsContainer.innerHTML = '';
    let totalSum = 0;

    cart.forEach((item, index) => {
        const original = Object.values(categoriesData).flat().find(p => p.name === item.name);
        const removedIngredients = original.ingredients.filter(ing => !item.ingredients.includes(ing));
        const additionsTotal = getAdditionsCost(item.additions);
        const perUnitPrice = item.price + additionsTotal;
        const additionsDetails = formatAdditionsWithPrices(item.additions);
        const itemTotal = perUnitPrice * item.quantity;

        cartItemsContainer.innerHTML += `
      <div class="mb-3 border-bottom pb-2">
        <strong>${item.name}</strong><br>
        ${removedIngredients.length > 0 ? `<div>Без: ${removedIngredients.join(', ')}</div>` : ''}
        ${item.additions.length > 0 ? `<div>Додатково: ${additionsDetails}</div>` : ''}
        Кількість: ${item.quantity} × (${item.price} + ${additionsTotal}) ₴ = <strong>${itemTotal} ₴</strong><br>
        <button class="btn btn-sm btn-outline-danger mt-1" onclick="removeFromCart(${index})">Видалити</button>
      </div>`;

        totalSum += itemTotal;
    });

    cartCounter.textContent = cart.length;
    cartTotal.textContent = `${totalSum} ₴`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function submitOrder() {
    console.log('Замовлення:', cart);
    alert('Замовлення відправлено!');
    cart = [];
    updateCartDisplay();
    document.getElementById('cart').classList.add('d-none');
}

// Ініціалізація
renderCategories();