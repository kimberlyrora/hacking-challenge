/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';

const Form = () => (
  <form className='container'>
    <p className='container__title'>
      Obtén tu
      <b className='container__title--bold'> seguro ahora</b>
    </p>
    <p className='container__subtitle'>Ingresa los datos para comenzar</p>
    <section className='container__section'>
      <select>
        {
          [1, 2, 3].map((doc) => <option key={doc}>{doc}</option>)
        }
      </select>
      <input type='text' placeholder='Nro. de Documento' />
      <input type='date' placeholder='Fecha de nacimiento' />
      <input type='text' placeholder='Celular' />
      <input type='checkbox' />
      <p>
      Acepto la
        <u>Política de Protección de Datos Personales y los Términos y Condiciones.</u>
      </p>
      <input type='checkbox' />
      <p>
      Acepto la
        <u>Política de Envío de Comunicaciones Comerciales.</u>
      </p>
			<button>Comencemos</button>
    </section>
  </form>
);

export default Form;
