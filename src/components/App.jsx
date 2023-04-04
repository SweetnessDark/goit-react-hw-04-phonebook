import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  componentDidMount() {
    const localContact = localStorage.getItem('contacts');

    if (localContact) {
      this.setState({ contacts: JSON.parse(localContact) });
    }
  }

  componentDidUpdate(prevProprs) {
    if (prevProprs.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handlesSubmit = data => {
    this.setState(({ contacts }) =>
      contacts.find(contact => contact.name === data.name)
        ? alert(`${data.name} is already in contacts`)
        : { contacts: [data, ...contacts] }
    );
  };

  onFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filterContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div className="container">
        <h1 className="h1">Phonebook</h1>
        <ContactForm onSubmit={this.handlesSubmit} />

        <h2 className="h2">Contacts</h2>
        <Filter value={filter} onFilter={this.onFilter} />
        <ContactList
          deleteContact={this.deleteContact}
          contacts={filterContact}
        />
      </div>
    );
  }
}
