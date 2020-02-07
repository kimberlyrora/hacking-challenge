/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';

const Input = (props) => {
  const {
    attributes: { type, placeholder, className, name },
    born,
    setBorn,
  } = props;
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required
      aria-required="true"
      className={className}
      value={born}
      onChange={(e) => setBorn(e)}
    />
  );
};

export default Input;
