/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import './styles.css';
import Section2 from './components/section2';
import Section1 from './components/section1';

const Form = (props) => {
  const { data } = props;
  const [state, setState] = useState({
    born: '',
    cellphone: '',
    name: '',
    lastname1: '',
    lastname2: '',
  });
  console.log('cell', state.cellphone, state.born);
  
  const [disable, setDisable] = useState(true);

  const setValue = (e) => setState({
    ...state,
    [e.target.name]: e.target.value,
  });

  return (
    <form>
      <p className='container__title'>
        Obtén tu
        <b className='container__title--bold'> seguro ahora</b>
      </p>
      <p className='container__subtitle'>Ingresa los datos para comenzar</p>
      <section className='container__inputs  global__container'>
        <Section1 data={data} born={state} setBorn={setValue} />
      </section>
      <section className='container__politics  global__container'>
        <Section2 />
      </section>
    </form>
  );
};

export default Form;
