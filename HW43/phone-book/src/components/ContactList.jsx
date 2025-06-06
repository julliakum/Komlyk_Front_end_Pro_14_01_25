import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addContact, deleteContact } from '../redux/contactsSlice';
import DeleteConfirmModal from './DeleteConfirmModal';
import { nanoid } from 'nanoid';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  useEffect(() => {
    if (contacts.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          const newContacts = data.map(user => ({
            id: nanoid(),
            firstName: user.name.split(' ')[0],
            lastName: user.name.split(' ')[1] || '',
            phone: user.phone.replace(/\D/g, '').slice(0, 12),
          }));
          newContacts.forEach(contact => dispatch(addContact(contact)));
        });
    }
  }, [contacts.length, dispatch]);

  const handleDeleteClick = (id) => {
    setContactToDelete(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete));
      setContactToDelete(null);
      setShowModal(false);
    }
  };

  const cancelDelete = () => {
    setContactToDelete(null);
    setShowModal(false);
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
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(contact.id)}>
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

{showModal && (
  <DeleteConfirmModal
    onConfirm={confirmDelete}
    onCancel={cancelDelete}
  />
)}
    </div>
  );
}
