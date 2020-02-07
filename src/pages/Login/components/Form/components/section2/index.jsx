/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';
import { Link } from '@reach/router';

const Section2 = (props) => {
  const { disabled, setValues, setDisable } = props;
  return (
    <>
      <div className='container__politics--politic1'>
        <label className='container__politics--label label1'>
          <input
            name='checkbox1'
            type='checkbox'
            onChange={(e) => setValues(e)}
          />
          <span className='container__politics--checkmark' />
        </label>
        <p className='container__politics--politic'>
          Acepto la
          <u> Política de Protección de Datos Personales y los Términos y Condiciones.</u>
        </p>
      </div>
      <div className='container__politics--politic2'>
        <label className='container__politics--label label2'>
          <input
            name='checkbox2'
            type='checkbox'
            onChange={(e) => setValues(e)}
          />
          <span className='container__politics--checkmark' />
        </label>
        <p className='container__politics--politic'>
          Acepto la
          <u> Política de Envío de Comunicaciones Comerciales.</u>
        </p>
      </div>
      <Link to='/addFamily'
        // type='button'
        className={disabled ? 'container__politics--button container__politics--disabled'
                            : 'container__politics--button container__politics--abled'}
        disabled={setDisable()}
      >
        Comencemos
      </Link>
    </>
  );
};

export default Section2;
