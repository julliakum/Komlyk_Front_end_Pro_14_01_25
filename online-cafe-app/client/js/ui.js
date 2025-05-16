import {
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  getAdditionsCost,
  formatAdditionsWithPrices,
  getTotalCartSum
} from './cart.js';

import { categoriesData } from './data.js';

let selectedProduct = null;

export function renderCategories() {
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
          <button class="btn btn-warning mt-2 w-100" onclick='window.openModal(${JSON.stringify(product).replace(/'/g, "\\'")})'>🛒</button>
        </div>
      </div>
    `;
    productsContainer.appendChild(column);
  });
}

window.openModal = function (product) {
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
};

window.changeQuantity = function (delta) {
  const input = document.getElementById('quantityInput');
  let current = parseInt(input.value);
  current = Math.max(1, current + delta);
  input.value = current;
};

export function toggleCart() {
  const cartBlock = document.getElementById('cart');
  cartBlock.classList.toggle('d-none');
  cartBlock.scrollIntoView({ behavior: 'smooth' });
  updateCartDisplay();
}

window.toggleCart = toggleCart;

export function updateCartDisplay() {
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
        <button class="btn btn-sm btn-outline-danger mt-1" onclick="window.removeFromCart(${index})">Видалити</button>
      </div>`;
    totalSum += itemTotal;
  });

  cartCounter.textContent = cart.length;
  cartTotal.textContent = `${totalSum} ₴`;
}

window.removeFromCart = function (index) {
  removeFromCart(index);
  updateCartDisplay();
};

window.submitOrder = function () {
  const order = {
    items: cart,
    totalPrice: cart.reduce((sum, item) => sum + item.totalPrice, 0),
  };

  console.log('Замовлення:', order);

  fetch('/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  })
    .then(response => response.json())
    .then(data => {
      alert('Замовлення прийнято!');
      clearCart();
      updateCartDisplay();
      document.getElementById('cart').classList.add('d-none');
    })
    .catch(error => {
      console.error('Помилка при надсиланні замовлення:', error);
      alert('Помилка при надсиланні замовлення.');
    });
};

export function setupFormHandlers() {
  document.getElementById('editForm').onsubmit = function (event) {
    event.preventDefault();
    const quantity = parseInt(document.getElementById('quantityInput').value);
    const selectedIngredients = Array.from(document.querySelectorAll('#ingredientsContainer input:checked')).map(i => i.value);
    const selectedAdditions = Array.from(document.querySelectorAll('#saucesContainer input:checked')).map(s => s.value);

    addToCart({
      name: selectedProduct.name,
      price: selectedProduct.price,
      ingredients: selectedIngredients,
      additions: selectedAdditions,
      quantity
    });

    updateCartDisplay();
    bootstrap.Modal.getOrCreateInstance(document.getElementById('editModal')).hide();
  };
}

window.loadOrders = function () {
  const ordersList = document.getElementById('ordersList');
  ordersList.innerHTML = '<p>Завантаження...</p>';

  fetch('/orders')
    .then(res => res.json())
    .then(data => {
      if (data.length === 0) {
        ordersList.innerHTML = '<p>У вас ще немає замовлень.</p>';
        return;
      }

      ordersList.innerHTML = data.map((order, i) => {
        const itemsHTML = order.items.map(item => `
          Назва: ${item.name}<br>
          Кількість: ${item.quantity}<br>
          Інгредієнти: ${item.ingredients.join(', ') || 'немає'}<br>
          Додатково: ${item.additions.join(', ') || 'немає'}<br>
          Ціна: ${item.totalPrice} ₴
          <hr>
        `).join('');

        const total = order.items.reduce((sum, item) => sum + item.totalPrice, 0);

        return `
          <div class="border-bottom pb-2 mb-2">
            <strong>Замовлення ${i + 1}:</strong><br>
            ${itemsHTML}
            <strong>Загальна сума: ${total} ₴</strong><br>
            <button class="btn btn-sm btn-danger mt-2" onclick="confirmDelete(${i})">Видалити</button>
          </div>
        `;
      }).join('');
    })
    .catch(err => {
      ordersList.innerHTML = '<p class="text-danger">Помилка завантаження замовлень.</p>';
      console.error('Помилка завантаження:', err);
    });

  bootstrap.Modal.getOrCreateInstance(document.getElementById('ordersModal')).show();
};

window.deleteOrder = function(index) {
  fetch(`/orders/${index}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      loadOrders();
    })
    .catch(err => {
      console.error('Помилка видалення:', err);
      alert('Помилка при видаленні замовлення.');
    });
};

window.confirmDelete = function (index) {
  if (confirm('Ви впевнені, що хочете видалити це замовлення?')) {
    deleteOrder(index);
  }
};
