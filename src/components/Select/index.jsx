/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';

const Select = () => (
  <>
    <select className='container__section--typeDoc global-style'>
      {
        ['DNI', 'PASAPORTE', 'CARNET DE EXTRANJERIA'].map((doc) => <option key={doc}>{doc}</option>)
      }
    </select>
  </>
);

export default Select;
