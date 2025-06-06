import React from 'react';
import AddContactForm from '../../components/AddContactForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';

export default function AddContact() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = (newContact) => {
    const contactWithId = {
      ...newContact,
      id: nanoid(),
    };

    dispatch(addContact(contactWithId));
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <AddContactForm onSave={handleSave} onCancel={handleCancel} />
  );
}
