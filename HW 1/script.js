// Метод 1 якщо треба в результаті просто робити виклик по ланцюжку
let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(`Метод №1: ${this.step}`);
        return this;
    }
};

ladder.up().up().down().showStep(); // 1


// Метод 2 якщо треба в передавати кількість кроків (аргументи) 
let ladder2 = {
    step: 0,
    up: function (n = 1) {
        this.step += n;
        return this;
    },
    down: function (n = 1) {
        this.step -= n;
        return this;
    },
    showStep: function () {
        alert(`Метод №2: ${this.step}`);
        return this;
    }
};

ladder2.up(5).up(1).down(2).showStep(); // 4
