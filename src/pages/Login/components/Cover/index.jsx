/* eslint-disable jsx-quotes */
import React from 'react';
import './styles.css';
import frame from '../../../../assets/frame.svg';
import dad from '../../../../assets/dad.svg';
import mom from '../../../../assets/mom.svg';
import kid from '../../../../assets/kid.svg';
import shadow from '../../../../assets/shadow.svg';
import shadow2 from '../../../../assets/shadow2.svg';
import flecha from '../../../../assets/flecha.png';

const Cover = (props) => {
  const { bullets } = props;
  return (
    <>
      <div className='container__cover--description'>
        <p className='container__cover--p'>
          Seguro de
          <b> Salud</b>
        </p>
        <ul className='container__cover--ul'>
          {
            bullets.map((bullet) => (
              <div key={bullet.id}>
                <img src={bullet.icon} alt='icon' />
                <li className='container__cover--li'>{bullet.description}</li>
              </div>
            ))
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
    </>
  );
};

export default Cover;
