/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';
import logo from '../../assets/logo.svg';

const Header = () => (
  <div className='header'>
    <img className='header__img' src={logo} alt='logo' />
  </div>
);

export default Header;
