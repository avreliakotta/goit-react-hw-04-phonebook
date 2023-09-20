
import  { useEffect, useState } from "react";
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import css from './App.module.css';
import { nanoid } from 'nanoid';
export const App =()=>{
  
  const [contacts,setContacts] = useState(()=>JSON.parse(window.localStorage.getItem('contacts'))??[]);
  const [filter,setFilter] = useState("");
 
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

   const addContacts = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }
    const isExist=contacts.find(el=>el.name===contact.name)
    if (isExist) {
    alert(`${name} is already in contacts.`);
    return
  }
    
  setContacts(prevContacts => [...prevContacts, contact]);
  }
 const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));

  }
 
  const filterContacts = (filter) => {
    if (filter.trim() === "") {

      setFilter("");
    } else {
      setFilter(filter );
    }
  };
  const filteredContacts = filter ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())) : contacts;
  return (
    <div className={css.container}>
       <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter filterContacts={filterContacts} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}


