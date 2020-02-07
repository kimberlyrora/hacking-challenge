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
    checkbox1: false,
    checkbox2: false,
    document: '',
  });
  const [disable, setDisable] = useState(true);

  const setValue = (e) => {
    const { target: { type, checked, value, name } } = e;
    const newState = type === 'checkbox' ? checked : value;
    setState({
      ...state,
      [name]: newState,
    });
  };

  const setDisabled = () => {
    const { born, cellphone, checkbox1, checkbox2, document } = state;
    const celPattern = /^[0-9]{9}$/;
    const docPattern = /^\d{8}(?:[-\s]\d{4})?$/;

    if (born.length
      && cellphone.length
      && celPattern.test(cellphone)
      && document.length
      && docPattern.test(document)
      && checkbox1
      && checkbox2) return setDisable(false) && false;
    return setDisable(true) && true;
  };
  return (
    <form>
      <p className='container__title'>
        Obtén tu
        <b className='container__title--bold'> seguro ahora</b>
      </p>
      <p className='container__subtitle'>Ingresa los datos para comenzar</p>
      <section className='container__inputs  global__container'>
        <Section1
          data={data}
          value={state}
          setValues={setValue}
        />
      </section>
      <section className='container__politics  global__container'>
        <Section2
          disabled={disable}
          state={state}
          setValues={setValue}
          setDisable={setDisabled}
        />
      </section>
    </form>
  );
};

export default Form;
