import React, { Component } from "react";
import Section from "./Section";
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleFilter = (searchedValue) => {
    const filter = searchedValue.target.value.toLowerCase();
    this.setState({ filter });
  };

  duplicateCheck = (data) => {
    const isDuplicate = false;
    if (this.state.contacts.find((item) => item.name === data.name)) {
      alert(`Contact with name: ${data.name} already exists`);
      return !isDuplicate;
    }
    return isDuplicate;
  };

  handleFormSubmit = (data) => {
    if (!this.duplicateCheck(data)) {
      const id = nanoid();
      const contactItem = { id, ...data };
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contactItem],
      }));
    }
  };

  handleDelete = (id) => {
    const clearedContactList = this.state.contacts.filter(
      (item) => item.id !== id
    );
    this.setState({ contacts: [...clearedContactList] });
  };

  componentDidMount() {
    const contactList = localStorage.getItem("contacts");
    const parsedContactList = JSON.parse(contactList);
    if (parsedContactList) {
      this.setState({ contacts: parsedContactList });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    let filteredContacts = [];
    let contactList = "";

    if (this.state.filter.length > 0) {
      filteredContacts = this.state.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.state.filter)
      );
      contactList = (
        <ContactList
          contacts={filteredContacts}
          handleDelete={this.handleDelete}
        >
          <Filter handleFilter={this.handleFilter} />
        </ContactList>
      );
    } else {
      contactList = (
        <ContactList
          contacts={this.state.contacts}
          handleDelete={this.handleDelete}
        >
          <Filter handleFilter={this.handleFilter} />
        </ContactList>
      );
    }

    return (
      <>
        <h1 className="title">Homework 3</h1>
        <Section title="Task 3.1 Phonebook">
          <Form onSubmit={this.handleFormSubmit} />
          {this.state.contacts.length > 0 ? contactList : null}
        </Section>
      </>
    );
  }
}

export default App;
