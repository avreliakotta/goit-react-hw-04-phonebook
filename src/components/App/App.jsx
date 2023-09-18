
import React, { Component } from "react";
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import css from './App.module.css';
import { nanoid } from 'nanoid';
export class App extends Component{
  state = {
    contacts: [],
    filter:""
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevProps.contacts) {
      localStorage.setItem('contact',JSON.stringify(this.state.contacts))
    }
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contact');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({contacts:parsedContacts})
    }
  }

    addContacts = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }
    const isExist=this.state.contacts.find(el=>el.name===contact.name)
    if (isExist) {
    alert(`${name} is already in contacts.`);
    return
  }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }));
  }
  deleteContact = id => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact=>contact.id !==id)
    }))
  }
 
  filterContacts = (filter) => {
    if (filter.trim() === "") {

      this.setState({ filter: "" });
    } else {
      this.setState({ filter });
    }
  };
  
 
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filter ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())) : contacts;
  return (
    <div className={css.container}>
       <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm onSubmit={this.addContacts} />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter filterContacts={this.filterContacts} />
      <ContactList contacts={filteredContacts} onDelete={this.deleteContact} />
    </div>
  );
}
}

