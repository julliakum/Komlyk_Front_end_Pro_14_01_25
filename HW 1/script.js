let users = JSON.parse(localStorage.getItem('users')) || [];

const userList = document.querySelector('.user-list');
const userDetails = document.querySelector('.user-details');
const formTitle = document.querySelector('.form-title');
const userForm = document.querySelector('.user-form');
const userIdField = document.querySelector('.user-id');
const nameField = document.querySelector('.name-input');
const emailField = document.querySelector('.email-input');

function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

function resetForm() {
    userIdField.value = '';
    nameField.value = '';
    emailField.value = '';
    formTitle.textContent = 'Додати користувача';
}

function renderList() {
    userList.innerHTML = '';
    users.forEach((user, index) => {
        const div = document.createElement('div');
        div.className = 'user-item';
        div.dataset.index = index;
        div.innerHTML = `
      <span>${user.name} (${user.email})</span>
      <span>
        <button class="view">View</button>
        <button class="edit">Edit</button>
        <button class="remove">Remove</button>
      </span>
    `;
        userList.appendChild(div);
    });
}

userList.addEventListener('click', (event) => {
    const btn = event.target;
    if (!btn.closest('.user-item')) return;

    const index = btn.closest('.user-item').dataset.index;
    const user = users[index];

    if (btn.classList.contains('view')) {
        userDetails.style.display = 'block';
        userDetails.innerHTML = `<strong>Ім'я:</strong> ${user.name}<br><strong>Email:</strong> ${user.email}`;
    } else if (btn.classList.contains('edit')) {
        userIdField.value = index;
        nameField.value = user.name;
        emailField.value = user.email;
        formTitle.textContent = 'Редагувати користувача';
        userDetails.style.display = 'none';
    } else if (btn.classList.contains('remove')) {
        if (confirm(`Ви впевнені, що хочете видалити ${user.name}?`)) {
            users.splice(index, 1);
            saveUsers();
            renderList();
            userDetails.style.display = 'none';
        }
    }
});

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const id = userIdField.value;

    if (id === '') {
        users.push({ name, email });
    } else {
        users[id] = { name, email };
    }

    saveUsers();
    renderList();
    resetForm();
});

renderList();
