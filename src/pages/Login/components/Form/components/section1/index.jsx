/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';
import Select from '../../../../../../components/Select';
import Input from '../../../../../../components/Input';

const Section1 = () => (
  <>
    <div className='container__section--document'>
      <Select />
      <input
        type='text'
        placeholder='Nro. de Documento'
        className='container__section--numberId global-style'
      />
    </div>
    <Input />
  </>
);

export default Section1;
