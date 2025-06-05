import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

export default function AddContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = 'Імʼя обовʼязкове';
    if (!lastName.trim()) newErrors.lastName = 'Прізвище обовʼязкове';
    if (!phone.trim()) {
      newErrors.phone = 'Телефон обовʼязковий';
    } else if (!/^\d{12}$/.test(phone)) {
      newErrors.phone = 'Некоректний формат телефону';
    }
    return newErrors;
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      dispatch(addContact({ id: nanoid(), firstName, lastName, phone }));
      navigate('/');
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
          />
          {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Телефон</label>
          <input
            type="tel"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="380XXXXXXXXX"
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        <button type="submit" className="btn btn-success me-2">Зберегти</button>
        <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Скасувати</button>
      </form>
    </div>
  );
}
