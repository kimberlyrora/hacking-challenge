/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';
import Select from '../../../../../../components/Select';
import Input from '../../../../../../components/Input';


const Section1 = (props) => {
  const { data: { documents, inputs }, value, setValues } = props;

  const inputsLogin = inputs.filter((inp) => inp.login)
                            .map((input) => (
                              <Input
                                name={input.name}
                                key={input.id}
                                attributes={input}
                                value={value[input.name]}
                                setValues={setValues}
                              />
                            ));

  return (
    <>
      <div className='container__section--document'>
        <Select options={documents} />
        <input
          name='document'
          type='text'
          placeholder='Nro. de Documento'
          className='container__section--numberId global-style'
          onChange={(e) => setValues(e)}
        />
      </div>
      {inputsLogin}
    </>
  );
};

export default Section1;
