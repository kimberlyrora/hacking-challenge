/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';

const Section1 = () => (
  <>
    <div className='container__section--document'>
      {/* <div className='container__section--select'> */}
        <select className='container__section--typeDoc global-style'>
        {/* <select className='container__section--select'> */}
          {
            [1, 2, 3].map((doc) => <option key={doc}>{doc}</option>)
          }
        {/* </select> */}
        </select>
      {/* </div> */}
      <input type='text' placeholder='Nro. de Documento' className='container__section--numberId global-style'>
        {/* <input type='text' placeholder='Nro. de Documento' /> */}
      </input>
    </div>
    <input type='date' placeholder='Fecha de nacimiento' className='container__section--dateborn global-style'>
      {/* <input type='date' placeholder='Fecha de nacimiento' /> */}
    </input>
    <input  type='text' placeholder='Celular' className='container__section--telephone global-style'>
      {/* <input type='text' placeholder='Celular' /> */}
    </input>
  </>
);

export default Section1;
