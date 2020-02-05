/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';
import frame from '../../assets/frame.svg';
import dad from '../../assets/dad.svg';
import mom from '../../assets/mom.svg';
import kid from '../../assets/kid.svg';
import shadow from '../../assets/shadow.svg';
import shadow2 from '../../assets/shadow2.svg';
import flecha from '../../assets/flecha.png';
import Form from './components/Form';
// import iconShield from '../../assets/iconShield.svg';

const array = [
  // {
  //   icon: iconShield,
  //   description:
    'Cotiza y compra tu seguro 100% digital',
  // },
  //  'Cómpralo de manera fácil y rápida',
  //  'Hasta S/.12 millones de cobertura anual',
  //  'Más de 300 clínicas en todo el Perú'
];

const Login = () => (
  <section className='container'>
    <section className='container__cover'>
      <div className='container__cover--transform'>
        <div className='container__cover--description'>
          <p className='container__cover--p'>
            Seguro de
            <b> Salud</b>
          </p>
          <ul className='container__cover--ul'>
            {
              array.map((li) => <li className='container__cover--li' key={li}>{li}</li>)
            }
          </ul>
          <nav className='container__cover--nav'>
            <img className='container__cover--arrow1' src={flecha} alt='arrow' />
              01 / 04
            <img className='container__cover--arrow2' src={flecha} alt='arrow' />
          </nav>
        </div>
        <div className='container__cover--img'>
          <img className='container__cover--frame' src={frame} alt='frame-img' />
          <img className='container__cover--dad' src={dad} alt='dad-img' />
          <img className='container__cover--mom' src={mom} alt='mom-img' />
          <img className='container__cover--kid' src={kid} alt='kid-img' />
          <img className='container__cover--shadow' src={shadow} alt='shadow-img' />
          <img className='container__cover--shadow2' src={shadow2} alt='shadow2-img' />
        </div>
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
