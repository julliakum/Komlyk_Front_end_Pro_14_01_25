import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addContact, deleteContact } from '../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contacts.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          data.forEach(user => {
            const newContact = {
              id: String(user.id),
              firstName: user.name.split(' ')[0],
              lastName: user.name.split(' ')[1] || '',
              phone: user.phone.replace(/\D/g, '').slice(0, 12),
            };
            dispatch(addContact(newContact));
          });
        });
    }
  }, [contacts.length, dispatch]);

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h2>Список контактів</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Імʼя</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phone}</td>
                <td>
                  <Link to={`/edit/${contact.id}`} className="btn btn-warning btn-sm me-2">
                    Редагувати
                  </Link>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(contact.id)}>
                    Видалити
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">Завантаження...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
