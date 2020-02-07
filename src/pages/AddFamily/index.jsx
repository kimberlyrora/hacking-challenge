/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import './styles.css';
import back from '../../assets/back.svg';
import { Link } from '@reach/router';
import Input from '../../components/Input';

const AddFamily = (props) => {
  const { data: { inputs } } = props;
  const [state, setState] = useState({
    born: '',
    name: '',
    lastname1: '',
    lastname2: '',
    document: '',
    radio1: '',
    radio2: '',
    radio3: '',
    radio4: '',
  });
  
  const setValue = (e) => {
    const { target: { type, checked, value, name } } = e;
    const newState = type === 'checkbox' ? checked : value;
    setState({
      ...state,
      [name]: newState,
    });
  };

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
        <p className='container__body--title'>Datos personales del titular</p>
        <div className='container__body--form'>
          {
            inputs.filter((inp) => inp.step1)
                  .map((input) => (
                    <Input
                      name={input.name}
                      key={input.id}
                      attributes={input}
                      value={state[input.name]}
                      setValues={setValue}
                  />
                  ))
          }
        </div>
        <div className='container__body--gender'>item</div>
        <div className='container__body--ensure'>item</div>
        <div className='container__body--button'>item</div>
      </section>
    </section>
  );
};

export default AddFamily;
