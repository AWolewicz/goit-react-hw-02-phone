import { useState } from "react";
import { AddContact } from "./AddContact/AddContact.jsx";
import { ContactList } from "./ContactsList/ContactsList.jsx";
import { Filter } from "./Filter/Filter.jsx"

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  
  const handleDeleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

  return (
    < div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <AddContact contacts={contacts} setContacts={setContacts} />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={setFilter} />
        <ContactList contacts={contacts} filter={filter} onDeleteContact={handleDeleteContact}/>
      </div>
    </div>
  );
};
