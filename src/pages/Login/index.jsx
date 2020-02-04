/* eslint-disable jsx-quotes */
import React, { Fragment } from 'react';
import './styles.css';
import Header from '../../components/Header/index.jsx';

const Login = () => (
  <Fragment className='container'>
    <Header className='item header' />
    <div className='item header'>header</div>
    <div className='item caratula'>caratula</div>
    <div className='item formulario'>formulario</div>
    <div className='item footer'>footer</div>
  </Fragment>
);

export default Login;
