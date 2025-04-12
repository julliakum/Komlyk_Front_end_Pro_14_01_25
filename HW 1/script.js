class Tenant {
    constructor(name) {
        this.name = name;
    }
}

class Apartment {
    constructor(windowCount) {
        this.windowCount = windowCount;
        this.tenants = [];
    }

    addTenant(tenant) {
        this.tenants.push(tenant);
    }
}

class House {
    constructor(houseNumber) {
        this.houseNumber = houseNumber;
        this.apartments = [];
    }

    addApartment(apartment) {
        this.apartments.push(apartment);
    }

    display() {
        let result = `<strong>Будинок №${this.houseNumber}</strong><br>`;
        this.apartments.forEach((apartment, apartmentIndex) => {
            result += `Квартира ${apartmentIndex + 1} (вікон: ${apartment.windowCount}):<br>`;
            apartment.tenants.forEach((tenant, tenantIndex) => {
                result += `— Мешканець ${tenantIndex + 1}: ${tenant.name}<br>`;
            });
        });
        return result;
    }

    toJSON() {
        return {
            houseNumber: this.houseNumber,
            apartments: this.apartments.map(apartment => ({
                windowCount: apartment.windowCount,
                tenants: apartment.tenants.map(tenant => tenant.name)
            }))
        };
    }
}

let house;
let numberOfApartments;
let numberOfTenantsPerApartment;

const houseForm = document.getElementById('house-form');
const apartmentFormsContainer = document.getElementById('apartment-forms');
const tenantFormsContainer = document.getElementById('resident-forms');
const outputContainer = document.getElementById('output');
const showHouseButton = document.getElementById('show-house-btn');

// Creare House
houseForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const houseNumberInput = document.getElementById('house-number');
    const apartmentsInput = document.getElementById('num-apartments');
    const tenantsInput = document.getElementById('num-residents');

    if (!houseNumberInput.value || !apartmentsInput.value || !tenantsInput.value) {
        alert('Будь ласка, заповніть всі поля!');
        return;
    }

    const houseNumber = houseNumberInput.value.trim();
    numberOfApartments = parseInt(apartmentsInput.value);
    numberOfTenantsPerApartment = parseInt(tenantsInput.value);

    house = new House(houseNumber);
    apartmentFormsContainer.innerHTML = '';
    tenantFormsContainer.innerHTML = '';
    outputContainer.innerHTML = '';
    showHouseButton.style.display = 'none';

    houseNumberInput.value = '';
    apartmentsInput.value = '';
    tenantsInput.value = '';
    houseForm.style.display = 'none';

    generateApartmentForms();
});

// Create Appartment Form
function generateApartmentForms() {
    const form = document.createElement('form');
    form.id = 'apartment-data-form';

    for (let i = 1; i <= numberOfApartments; i++) {
        form.appendChild(createApartmentInput(i));
    }

    const saveApartmentsButton = document.createElement('button');
    saveApartmentsButton.type = 'submit';
    saveApartmentsButton.textContent = 'Зберегти квартири';
    form.appendChild(saveApartmentsButton);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const apartmentWindowCounts = [];

        for (let [, value] of formData.entries()) {
            if (!value.trim()) {
                alert('Всі поля повинні бути заповнені!');
                return;
            }
            apartmentWindowCounts.push(parseInt(value.trim()));
        }

        apartmentWindowCounts.forEach(windowCount => {
            const apartment = new Apartment(windowCount);
            house.addApartment(apartment);
        });

        form.remove();
        generateTenantForms();
    });

    apartmentFormsContainer.appendChild(form);
}

function createApartmentInput(index) {
    const label = document.createElement('label');
    label.innerHTML = `Кількість вікон у квартирі ${index}:`;
    const input = document.createElement('input');
    input.type = 'number';
    input.min = '0';
    input.required = true;
    input.name = 'apartment-' + index;
    label.appendChild(input);
    return label;
}


// Create Tenant Form
function generateTenantForms() {
    const form = document.createElement('form');
    form.id = 'tenant-data-form';

    house.apartments.forEach((apartment, apartmentIndex) => {
        form.appendChild(createTenantSection(apartmentIndex));
    });

    const saveTenantsButton = document.createElement('button');
    saveTenantsButton.type = 'submit';
    saveTenantsButton.textContent = 'Зберегти мешканців';
    form.appendChild(saveTenantsButton);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const tenantNames = [...formData.values()];

        if (tenantNames.some(name => !name.trim())) {
            alert('Імена мешканців не можуть бути порожніми!');
            return;
        }

        let tenantIndexGlobal = 0;
        house.apartments.forEach(apartment => {
            for (let i = 0; i < numberOfTenantsPerApartment; i++) {
                const tenant = new Tenant(tenantNames[tenantIndexGlobal++]);
                apartment.addTenant(tenant);
            }
        });

        saveHouseToLocalStorage(house);

        form.remove();
        showHouseButton.style.display = 'inline-block';
        houseForm.style.display = 'block';
    });

    tenantFormsContainer.appendChild(form);
}

function createTenantSection(apartmentIndex) {
    const section = document.createElement('div');
    section.innerHTML = `<strong>Мешканці квартири ${apartmentIndex + 1}</strong><br>`;

    for (let tenantIndex = 1; tenantIndex <= numberOfTenantsPerApartment; tenantIndex++) {
        const label = document.createElement('label');
        label.innerHTML = `Ім'я мешканця ${tenantIndex}:`;
        const input = document.createElement('input');
        input.type = 'text';
        input.required = true;
        input.name = `apartment-${apartmentIndex}-tenant-${tenantIndex}`;
        label.appendChild(input);
        section.appendChild(label);
    }

    return section;
}

// Display data about the house
showHouseButton.addEventListener('click', () => {
    outputContainer.innerHTML = house.display();
});

// Save in the localStorage
function saveHouseToLocalStorage(houseObject) {
    let savedHouses = JSON.parse(localStorage.getItem('houses')) || [];
    savedHouses.push(houseObject.toJSON());
    localStorage.setItem('houses', JSON.stringify(savedHouses));
}
