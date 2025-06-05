import React from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import ContactList from './components/ContactList';
import AddContactForm from './pages/AddContact';
import EditContactForm from './pages/EditContact';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

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
        <Route path="/" element={<ContactList />} />
        <Route path="/add" element={<AddContactForm />} />
        <Route path="/edit/:id" element={<EditContactForm />} />
      </Routes>
    </div>
  );
}
