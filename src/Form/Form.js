import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import styles from "./Form.module.css";

const INITIAL_STATE = { name: "", number: "" };

class Form extends Component {
  state = { name: "", number: "" };

  handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState({ [inputName]: inputValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;
    return (
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          <span className={styles.label_title}>Name</span>
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoComplete="off"
            onChange={handleChange}
            required
          ></input>
        </label>
        <label className={styles.label}>
          <span className={styles.label_title}>Phone Number</span>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            autoComplete="off"
            onChange={handleChange}
            required
          ></input>
        </label>
        <Button type="submit" label="Add Contact" btnClass="form" />
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
