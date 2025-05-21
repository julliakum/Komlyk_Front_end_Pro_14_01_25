import React, { useState } from 'react';

export default function AddContactForm({ onSave, onCancel }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const isFormValid = firstName && lastName && phone;
    if (isFormValid) {
      const newContact = {
        firstName: firstName,
        lastName: lastName,
        phone: phone
      };

      onSave(newContact);

      setFirstName('');
      setLastName('');
      setPhone('');
    }
  };

  const handleFirstNameChange = function (event) {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = function (event) {
    setLastName(event.target.value);
  };

  const handlePhoneChange = function (event) {
    setPhone(event.target.value);
  };

  return (
    <div>
      <h2>Додати контакт</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Імʼя</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Прізвище</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Телефон</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <button type="submit" className="btn btn-success me-2">
          Зберегти
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Скасувати
        </button>
      </form>
    </div>
  );
}
