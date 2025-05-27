import { useState } from 'react';

export default function AddContactForm({ onSave, onCancel }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = 'Імʼя обовʼязкове';
    if (!lastName.trim()) newErrors.lastName = 'Прізвище обовʼязкове';
    if (!/^\d{12}$/.test(phone)) {
      newErrors.phone = 'Номер телефону має містити 12 цифр';
    }
    return newErrors;
  };

  const handlePhoneChange = e => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 12);
    setPhone(digitsOnly);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const newContact = { firstName, lastName, phone };
      onSave(newContact);
      setFirstName('');
      setLastName('');
      setPhone('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h2>Додати контакт</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Імʼя</label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Прізвище</label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
          {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Телефон</label>
          <input
            type="tel"
            placeholder="(38)XXX-XXX-XX-XX"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        <button type="submit" className="btn btn-success me-2">Зберегти</button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Скасувати</button>
      </form>
    </div>
  );
}
