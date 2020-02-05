import React from 'react';

const Form = () => (
  <form className='container'>
		<h2>Obtén tu <b>seguro ahora</b></h2>
		<h4>Ingresa los datos para comenzar</h4>
		<select>
			{
			  [1, 2, 3].map(document => <>
			    <option>{document}</option>
			  </>)
			}
		</select>
		<input type='text' placeholder='Nro. de Documento'/>
		<input type='date' placeholder='Fecha de nacimiento'/>
		<input type='text' placeholder='Celular'/>
		<input type='checkbox' />
		<p>
		Acepto la <u>Política de Protección de Datos Personales y los Términos y Condiciones.</u>
		</p>
		<p>
		Acepto la <u>Política de Envío de Comunicaciones Comerciales.</u>
		</p>
		<input type='checkbox' />
	</form>
);

export default Form;
