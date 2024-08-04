import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  addContact,
  deleteContact,
  selectAllContacts,
} from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtersSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectNameFilter);

  // Зчитування контактів з localStorage при завантаженні
  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      JSON.parse(storedContacts).forEach((contact) =>
        dispatch(addContact(contact))
      );
    }
  }, [dispatch]);

  // Зберігання контактів у localStorage при їх зміні
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Функція для додавання нового контакту
  const handleAddContact = (name, number) => {
    const newContact = {
      id: Date.now().toString(),
      name,
      number,
    };
    dispatch(addContact(newContact));
  };

  // Функція для видалення контакту
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  // Фільтрація контактів за іменем
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox />
      <ContactsList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
