import { additionsPrices } from './data.js';

export let cart = [];

export function addToCart(item) {
  const additionsCost = getAdditionsCost(item.additions);
  const totalPrice = (item.price + additionsCost) * item.quantity;

  const existingItem = cart.find(existing =>
    existing.name === item.name &&
    JSON.stringify(existing.ingredients) === JSON.stringify(item.ingredients) &&
    JSON.stringify(existing.additions) === JSON.stringify(item.additions)
  );

  if (existingItem) {
    existingItem.quantity += item.quantity;
    existingItem.totalPrice += totalPrice;
  } else {
    cart.push({
      ...item,
      totalPrice
    });
  }
}

export function removeFromCart(index) {
  cart.splice(index, 1);
}

export function clearCart() {
  cart = [];
}

export function getAdditionsCost(additions = []) {
  return additions.reduce((sum, add) => sum + (additionsPrices[add] || 0), 0);
}

export function formatAdditionsWithPrices(additions = []) {
  return additions.map(a => `${a} (+${additionsPrices[a] || 0} ₴)`).join(', ');
}

export function getTotalCartSum() {
  return cart.reduce((sum, item) => sum + item.totalPrice, 0);
}