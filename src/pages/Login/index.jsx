/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';
import Form from './components/Form';
import Cover from './components/Cover';

const Login = () => (
  <section className='container'>
    <section className='container__cover'>
      <div className='container__cover--transform'>
        <Cover />
      </div>
    </section>
    <section className='container__form'>
      <section className='container__form--grid'>
        <Form />
      </section>
    </section>
  </section>
);

export default Login;
