/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';
import Select from '../../../../../../components/Select';
import Input from '../../../../../../components/Input';


const Section1 = (props) => {
  const { data: { documents, inputs }, born, setBorn } = props;

  const inputsLogin = inputs.filter((inp) => inp.login)
                            .map((input) => (
                              <Input
                                name={input.name}
                                key={input.id}
                                attributes={input}
                                born={born[input.name]}
                                setBorn={setBorn}
                              />
                            ));

  return (
    <>
      <div className='container__section--document'>
        <Select options={documents} />
        <input
          type='text'
          placeholder='Nro. de Documento'
          className='container__section--numberId global-style'
        />
      </div>
      {inputsLogin}
    </>
  );
};

export default Section1;
