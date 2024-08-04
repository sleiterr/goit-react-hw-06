// src/redux/contactsSlice.js

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// Налаштування адаптера сутності
const contactsAdapter = createEntityAdapter({
  selectId: (contact) => contact.id,
});

// Ініціалізація стану
const initialState = contactsAdapter.getInitialState();

// Створення слайсу
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: contactsAdapter.addOne,
    deleteContact: contactsAdapter.removeOne,
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

// Генерація селекторів
export const {
  selectById: selectContactById,
  selectIds: selectContactIds,
  selectEntities: selectContactEntities,
  selectAll: selectAllContacts,
  selectTotal: selectTotalContacts,
} = contactsAdapter.getSelectors((state) => state.contacts);

export default contactsSlice.reducer;
