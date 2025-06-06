import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

const loadState = () => {
  try {
    const serialized = localStorage.getItem('contacts');
    return serialized ? { contacts: JSON.parse(serialized) } : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state.contacts);
    localStorage.setItem('contacts', serialized);
  } catch {}
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});