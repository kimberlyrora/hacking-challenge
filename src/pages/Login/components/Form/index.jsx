/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';
import Seccion2 from './components/section2';


const Form = () => (
  <form className='container'>
    <p className='container__title'>
      Obtén tu
      <b className='container__title--bold'> seguro ahora</b>
    </p>
    <p className='container__subtitle'>Ingresa los datos para comenzar</p>
    <section className='container__inputs'>

      {/* <div className='container__section--document'>
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
      </div> */}
    </section>
    <section className='container__politics'>
      <Seccion2 />
    </section>
  </form>
);

export default Form;
