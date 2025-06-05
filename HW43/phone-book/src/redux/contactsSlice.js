import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [], 
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = action.payload;
      state.contacts.push(newContact);
    },
    deleteContact: (state, action) => {
      const contactIdToDelete = action.payload;
      state.contacts = state.contacts.filter(contact => contact.id !== contactIdToDelete);
    },
    updateContact: (state, action) => {
      const updatedContact = action.payload;
      const index = state.contacts.findIndex(contact => contact.id === updatedContact.id);
      if (index !== -1) {
        state.contacts[index] = updatedContact;
      }
    },
    resetContacts: (state) => {
      state.contacts = [];
    },
  },
});

export const { addContact, deleteContact, updateContact, resetContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
