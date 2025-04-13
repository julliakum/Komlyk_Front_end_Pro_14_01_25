class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        if (!this.toppings.includes(topping)) {
            this.toppings.push(topping);
        }
    }

    calculatePrice() {
        let totalPrice = 0;
        totalPrice += Hamburger.SIZES[this.size].price;
        totalPrice += Hamburger.STUFFINGS[this.stuffing].price;
        this.toppings.forEach(topping => {
            totalPrice += Hamburger.TOPPINGS[topping].price;
        });
        return totalPrice;
    }

    calculateCalories() {
        let totalCalories = 0;
        totalCalories += Hamburger.SIZES[this.size].calories;
        totalCalories += Hamburger.STUFFINGS[this.stuffing].calories;
        this.toppings.forEach(topping => {
            totalCalories += Hamburger.TOPPINGS[topping].calories;
        });
        return totalCalories;
    }

    static SIZES = {
        SIZE_SMALL: { price: 50, calories: 20 },
        SIZE_LARGE: { price: 100, calories: 40 }
    };

    static STUFFINGS = {
        STUFFING_CHEESE: { price: 10, calories: 20 },
        STUFFING_SALAD: { price: 20, calories: 5 },
        STUFFING_POTATO: { price: 15, calories: 10 }
    };

    static TOPPINGS = {
        TOPPING_SEASONING: { price: 15, calories: 0 },
        TOPPING_MAYO: { price: 20, calories: 5 }
    };
}



// Usage
// маленький гамбургер із начинкою із сиру
const hamburger = new Hamburger(
    'SIZE_SMALL',
    'STUFFING_CHEESE'
);

// Добавка з майонезу
hamburger.addTopping('TOPPING_MAYO');

// Запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories()) + "calories";

// Скільки коштує
console.log("Price: " + hamburger.calculatePrice()) + "tugriks";


// Передумали і додали ще приправу
hamburger.addTopping('TOPPING_SEASONING');

// А скільки тепер коштує?
console.log("Price with seasoning: " + hamburger.calculatePrice()) + "tugriks";

// Запитаємо скільки там тепер калорій
console.log("Calories with seasoning: " + hamburger.calculateCalories()) + "calories";

