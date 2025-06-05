import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contactsSlice';

export default function EditContactForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contact = useSelector(state =>
    state.contacts.contacts.find(c => c.id === id || c.id === Number(id))
  );

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setPhone(contact.phone);
    }
  }, [contact]);

  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = 'Імʼя обовʼязкове';
    if (!lastName.trim()) newErrors.lastName = 'Прізвище обовʼязкове';
    if (!/^\d{12}$/.test(phone)) {
      newErrors.phone = 'Номер телефону має містити 12 цифр';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      dispatch(updateContact({ id: contact.id, firstName, lastName, phone }));
      navigate('/');
    } else {
      setErrors(validationErrors);
    }
  };

  if (!contact) return <p>Контакт не знайдено</p>;

  return (
    <div>
      <h2>Редагувати контакт</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Імʼя</label>
          <input
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Прізвище</label>
          <input
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
        <button type="submit" className="btn btn-primary me-2">Зберегти</button>
        <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Скасувати</button>
      </form>
    </div>
  );
}
