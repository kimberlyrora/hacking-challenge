/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';


const Seccion2 = () => (
  <>
    <div className='container__politics--politic1'>
      <label className='container__politics--label label1'>
        <input type="checkbox" />
        <span className='container__politics--checkmark' />
      </label>
      <p className='container__politics--politic'>
        Acepto la
        <u> Política de Protección de Datos Personales y los Términos y Condiciones.</u>
      </p>
    </div>
    <div className='container__politics--politic2'>
      <label className='container__politics--label label2'>
        <input type="checkbox" />
        <span className='container__politics--checkmark' />
      </label>
      <p className='container__politics--politic'>
        Acepto la
        <u> Política de Envío de Comunicaciones Comerciales.</u>
      </p>
    </div>
    <button type='button' className='container__politics--button'>
      Comencemos
    </button>
  </>
);

export default Seccion2;
