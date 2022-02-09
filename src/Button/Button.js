import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const defaultBtnClass = "";

const Button = ({ type, label, onClick, btnClass }) => {
  let btnClasses = [styles.button];
  if (btnClass) {
    btnClasses.push(styles[btnClass]);
  }
  return (
    <button type={type} onClick={onClick} className={btnClasses.join(" ")}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  btnClass: defaultBtnClass,
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  btnClass: PropTypes.string,
};
export default Button;
