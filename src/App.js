import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './App.css';
import ContactsList from './components/ContactsList/ContactsList';
import ContactsForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [ ],
    filter: '',
  }
  addContact = ({name, number}) => {
    const contact = {
        id: uuidv4(),
        name,
        number
    }
        if (this.state.contacts.find((contact) => contact.name === name)) { 
          console.log(this.state.contacts);
          alert(`${name} is already in contacts`);
        } else {
          this.setState(prevState => {
            return {
              contacts: [...prevState.contacts, contact]
            }
          })
        }  
  }
  removeContact = contactId => {
    this.setState(prevState => {
      return {
      contacts: prevState.contacts.filter(({ id }) => id !== contactId)
      }
    })
  }
  changeFilter = filter => {
    this.setState({ filter })
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    
    return contacts.filter(contact =>
       contact.name.toLowerCase().includes(filter.toLowerCase()),
    )
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    this.setState({contacts: parsedContacts})
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
      <h1>Phonebook</h1>
      <ContactsForm onAddContact={this.addContact}/>
      <h2>Contacts</h2>
      <p className={s.text}>Find contacts by name</p>
      <Filter filter={filter} onChangeFilter ={this.changeFilter}/>
      {contacts.length > 0 && (
        <ContactsList contacts={visibleContacts} onRemoveContact={this.removeContact}/>
      )}
    </div>
    ) 
  }
}