/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';
import back from '../../assets/back.svg';
import { Link } from '@reach/router';

const AddFamily = (props) => {
  return (
    <section className='container__addFamily'>
      <section className='container__subheader'>
        <Link to='/' className='container__subheader--pagination'>
          <img src={back} alt='back' />
          <span className='container__subheader--span'>1 DE 7</span>
        </Link>
        <div className='container__subheader--welcome'>
          Hola, <b className='container__subheader--bold'>Luisa</b>
        </div>
        <div className='container__subheader--subtitle'>
          Valida que los datos sean correctos
        </div>
      </section>
      <section className='container__body'>
					dddd
      </section>
    </section>
  );
};

export default AddFamily;
