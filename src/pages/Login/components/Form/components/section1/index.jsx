/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';

const Section1 = () => (
  <>
    <div className='container__section--document'>
      <select className='container__section--typeDoc global-style'>
        {
          ['DNI', 'PASAPORTE', 'CARNET DE EXTRANJERIA'].map((doc) => <option key={doc}>{doc}</option>)
        }
      </select>
      <input type='text' placeholder='Nro. de Documento' className='container__section--numberId global-style' />
    </div>
    <input type="date" placeholder='Fecha de Nacimiento' required aria-required="true" className='container__section--dateborn global-style' />
    <input type='text' placeholder='Celular' className='container__section--telephone global-style' />
  </>
);

export default Section1;
