function Person(name, age) {
  this.name = name;
  this.age = age;

  this.getInfo = function () {
    return `Ім’я: ${this.name}, Вік: ${this.age}`;
  };
}

function Car(year, make, model, color) {
  this.year = year;
  this.make = make;
  this.model = model;
  this.color = color;
  this.owner = null;

  this.setOwner = function (person) {
    this.owner = person;
  };

  this.getInfo = function () {
    const ownerInfo = this.owner ? this.owner.getInfo() : 'Немає власника';
    return `
      <strong>Автомобіль:</strong> ${this.year}, ${this.make} ${this.model}, ${this.color}.<br>
      <strong>Власник:</strong> ${ownerInfo}.<br><br>
      <button class="clear-btn">Очистити збережені дані</button>
    `;
  };
}


// --- Auxiliary functions ---
function getFormData() {
  return {
    name: document.querySelector('.input-name').value.trim(),
    age: parseInt(document.querySelector('.input-age').value),
    year: parseInt(document.querySelector('.input-year').value),
    make: document.querySelector('.input-make').value.trim(),
    model: document.querySelector('.input-model').value.trim(),
    color: document.querySelector('.input-color').value.trim(),
  };
}

function isValidPerson(name, age) {
  return name && !isNaN(age) && age >= 18;
}

function isValidCar(year, make, model, color) {
  return make && model && !isNaN(year) && color;
}

function showResult(car) {
  const resultBlock = document.querySelector('.result');
  resultBlock.innerHTML = car.getInfo();

  const clearBtn = resultBlock.querySelector('.clear-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      localStorage.removeItem('savedCar');
      resultBlock.innerHTML = '';
    });
  }

  localStorage.setItem('savedCar', JSON.stringify(car));

  console.log('Car instance:', car);
  console.log('Car prototype:', Object.getPrototypeOf(car));
  console.log('Person prototype:', Object.getPrototypeOf(car.owner));
}

function loadSavedData() {
  const savedData = localStorage.getItem('savedCar');
  if (!savedData) return;

  const parsedData = JSON.parse(savedData);

  const person = new Person(parsedData.owner.name, parsedData.owner.age);
  const car = new Car(parsedData.year, parsedData.make, parsedData.model, parsedData.color);
  car.setOwner(person);

  showResult(car);
}


// --- Main logic ---
document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const data = getFormData();

  if (!isValidPerson(data.name, data.age)) {
    alert("Будь ласка, введіть коректне ім’я і вік (18+).");
    return;
  }

  if (!isValidCar(data.year, data.make, data.model, data.color)) {
    alert("Будь ласка, заповніть усі поля про автомобіль.");
    return;
  }

  const person = new Person(data.name, data.age);
  const car = new Car(data.year, data.make, data.model, data.color);
  car.setOwner(person);

  showResult(car);
  event.target.reset();
});


loadSavedData();
