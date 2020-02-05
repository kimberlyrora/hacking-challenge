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
      <div className='container__section--document'>
        <div className='container__section--typeDoc'>
          <select>
            {
              [1, 2, 3].map((doc) => <option key={doc}>{doc}</option>)
            }
          </select>
        </div>
        <div className='container__section--numberId'>
          <input type='text' placeholder='Nro. de Documento' />
        </div>
      </div>
      <div className='container__section--dateborn'>
        <input type='date' placeholder='Fecha de nacimiento' />
      </div>
      <div className='container__section--telephone'>
        <input type='text' placeholder='Celular' />
      </div>
      <div className='container__section--politic1 politics'>
        <div className='container__section--checkbox'>
          <input type='checkbox' />
        </div>
        <div className='container__section--description'>
          <p>
          Acepto la
            <u>Política de Protección de Datos Personales y los Términos y Condiciones.</u>
          </p>
        </div>
      </div>
      <div className='container__section--politic2 politics'>
        <div className='container__section--checkbox'>
          <input type='checkbox' />
        </div>
        <div className='container__section--description'>
          <p>
          Acepto la
            <u>Política de Envío de Comunicaciones Comerciales.</u>
          </p>
        </div>
      </div>
      <div className='container__section--button'>
        <button type='button'>Comencemos</button>
      </div>
    </section>
  </form>
);

export default Form;
