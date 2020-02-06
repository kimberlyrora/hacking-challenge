/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';

const Input = () => (
  <>
    {/* <input type='text' placeholder='Nro. de Documento' className='container__section--numberId global-style' /> */}
    <input
      type="date"
      placeholder='Fecha de Nacimiento'
      required
      aria-required="true"
      className='container__section--dateborn global-style'
    />
    <input
      type='text'
      placeholder='Celular'
      className='container__section--telephone global-style'
    />
  </>
);

export default Input;
