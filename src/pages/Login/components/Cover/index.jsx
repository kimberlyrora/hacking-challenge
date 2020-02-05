import React from 'react';

const Cover = () => (
	<section >
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
	</section>
);

export default Cover;
