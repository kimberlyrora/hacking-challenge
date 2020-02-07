/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';

const Select = (props) => {
  const { options } = props;
  return (
    <>
      <select className='container__section--typeDoc global-style'>
        {
          options.map((doc) => <option key={doc.id}>{doc.description}</option>)
        }
      </select>
    </>
  );
};

export default Select;
