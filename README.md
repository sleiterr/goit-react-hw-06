# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Description:

This project is a simple contact management application (Phonebook) using React, 
Redux Toolkit for state management, and Formik for handling forms. 
The app allows users to add, delete, and filter contacts. It also includes form validation using the Yup library.

Key Features:

Contact Management: Add new contacts and delete existing ones.
Filtering: Search contacts by name.
Forms: Add contacts with form validation.

Technologies:

React: For building the user interface.
Redux Toolkit: For managing global state.
Formik: For form handling and validation.
Yup: For form data validation.
Vite: As a build and development tool.

Project Structure:

src/
│
├── components/
│   ├── ContactForm/          - Component for adding contacts.
│   ├── ContactList/          - Component for displaying the list of contacts.
│   ├── SearchBox/            - Component for filtering contacts.
│   └── Contact/              - Directory containing components related to contact management.
│
├── redux/
│   ├── contactsSlice.js      - Redux slice for managing contacts.
│   ├── filtersSlice.js       - Redux slice for managing filters.
│   ├── persistConfig.js      - Configuration file for Redux Persist.
│   └── store.js              - Store configuration file.
│
└── App.jsx                   - Main application component.

Dependencies:

react
redux
react-redux
@reduxjs/toolkit
formik
yup
vite
