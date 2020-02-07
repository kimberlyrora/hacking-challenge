/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';
import Form from './components/Form';
import Cover from './components/Cover';

const Login = (props) => {
  const { data } = props;
  return (
    <section className='container'>
      <section className='container__cover'>
        <div className='container__cover--transform'>
          <Cover data={data} />
        </div>
      </section>
      <section className='container__form'>
        <section className='container__form--grid'>
          <Form data={data} />
        </section>
      </section>
    </section>
  );
};

export default Login;
