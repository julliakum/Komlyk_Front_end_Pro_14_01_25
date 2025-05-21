import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState('contacts');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(user => ({
          id: user.id,
          firstName: user.name.split(' ')[0],
          lastName: user.name.split(' ')[1] || '',
          phone: user.phone,
        }));
        setContacts(formatted);
      });
  }, []);

  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleAdd = newContact => {
    setContacts(prev => [...prev, { ...newContact, id: Date.now() }]);
    setPage('contacts');
  };

  return (
    <div className="container mt-4">
      <nav className="mb-4">
        <button className="btn btn-primary me-2" onClick={() => setPage('contacts')}>Контакти</button>
        <button className="btn btn-success" onClick={() => setPage('add')}>Додати контакт</button>
      </nav>

      {page === 'contacts' ? (
        <ContactList contacts={contacts} onDelete={handleDelete} />
      ) : (
        <AddContactForm onSave={handleAdd} onCancel={() => setPage('contacts')} />
      )}
    </div>
  );
}
