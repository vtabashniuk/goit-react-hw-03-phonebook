import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, children, handleDelete }) => (
  <div className={styles.contacts}>
    <h2 className={styles.title}>Contacts</h2>
    {children}
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <span className={styles.contact_name}>{name} :</span>
          <span className={styles.contact_number}>{number}</span>
          <Button
            type="button"
            btnClass="contact_list"
            label="Delete"
            onClick={() => handleDelete(id)}
          />
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  children: PropTypes.element,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
