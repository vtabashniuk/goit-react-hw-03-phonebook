import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ handleFilter }) => (
  <div className={styles.filter}>
    <label htmlFor="searchInput" className={styles.label}>
      Find contact by name
    </label>
    <input
      id="searchInput"
      type="search"
      autoComplete="off"
      onChange={handleFilter}
    ></input>
  </div>
);

Filter.propTypes = { handleFilter: PropTypes.func.isRequired };

export default Filter;
