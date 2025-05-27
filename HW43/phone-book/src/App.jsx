import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import ContactList from './pages/Contacts';
import AddContactForm from './pages/AddContact';
import EditContactForm from './pages/EditContact';
import DeleteConfirmModal from './pages/DeleteConfirmModal';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [toDelete, setToDelete] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem('contacts');
    if (stored) {
      setContacts(JSON.parse(stored));
    } else {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          const formatted = data.map(user => ({
            id: user.id,
            firstName: user.name.split(' ')[0],
            lastName: user.name.split(' ')[1] || '',
            phone: user.phone.replace(/\D/g, '').slice(0, 12)
          }));
          setContacts(formatted);
          localStorage.setItem('contacts', JSON.stringify(formatted));
        });
    }
  }, []);

  const saveContacts = updated => {
    setContacts(updated);
    localStorage.setItem('contacts', JSON.stringify(updated));
  };

  const handleAdd = newContact => {
    const updated = [...contacts, { ...newContact, id: Date.now() }];
    saveContacts(updated);
    navigate('/');
  };

  const handleEdit = updated => {
    const modified = contacts.map(c => c.id === updated.id ? updated : c);
    saveContacts(modified);
    navigate('/');
  };

  const handleDelete = id => {
    setToDelete(id);
  };

  const confirmDelete = () => {
    const updated = contacts.filter(c => c.id !== toDelete);
    saveContacts(updated);
    setToDelete(null);
  };

  const goToContacts = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <div className="container mt-4">
      <nav className="mb-4">
        <button className="btn btn-primary me-2" onClick={goToContacts}>Контакти</button>
        <Link to="/add" className="btn btn-success">Додати контакт</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} onDelete={handleDelete} />} />
        <Route path="/add" element={<AddContactForm onSave={handleAdd} onCancel={() => navigate('/')} />} />
        <Route path="/edit/:id" element={<EditContactForm contacts={contacts} onSave={handleEdit} />} />
      </Routes>

      {toDelete !== null && (
        <DeleteConfirmModal
          onConfirm={confirmDelete}
          onCancel={() => setToDelete(null)}
        />
      )}
    </div>
  );
}