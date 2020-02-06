/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable camelcase */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import './styles.css';
import frame from '../../../../assets/frame.svg';
import dad from '../../../../assets/dad.svg';
import mom from '../../../../assets/mom.svg';
import kid from '../../../../assets/kid.svg';
import shadow from '../../../../assets/shadow.svg';
import shadow2 from '../../../../assets/shadow2.svg';
import flecha from '../../../../assets/flecha.png';
import disabled_arrow from '../../../../assets/disabled_arrow.svg';

const Cover = (props) => {
  const { bullets } = props;
  const [bullet, setBullet] = useState(1);

  const benefit = bullets.filter((ben) => ben.id === bullet)
                         .map((bene) => (
                           <div key={bene.id} className='container__cover--li'>
                             <img src={bene.icon} alt='icon' />
                             <li>{bene.description}</li>
                           </div>
                         ));

  const onClick = (e) => {
    if (e === 'R') return setBullet(bullet + 1);
    return setBullet(bullet - 1);
  };
  return (
    <>
      <div className='container__cover--description'>
        <p className='container__cover--p'>
          Seguro de
          <b> Salud</b>
        </p>
        <ul className='container__cover--ul'>
          {benefit}
        </ul>
        <nav className='container__cover--nav'>
          <button
            type='button'
            className='container__cover--button1 global_button'
            onClick={onClick}
            disabled={bullet <= 1}
          >
            <img
              className={
                bullet <= 1 ? 'global_arrow'
                            : 'container__cover--arrow1 global_arrow'
              }
              src={bullet <= 1 ? disabled_arrow : flecha}
              alt='arrow'
            />
          </button>
          <span className='container__cover--span'>{`0${bullet} / 0${bullets.length}`}</span>
          <button
            type='button'
            className='container__cover--button2 global_button'
            onClick={() => onClick('R')}
            disabled={bullet >= 4}
          >
            <img
              className={
                bullet >= 4 ? 'container__cover--disablearrow2 global_arrow'
                            : 'container__cover--arrow2 global_arrow'
              }
              src={bullet >= 4 ? disabled_arrow : flecha}
              alt='arrow'
            />
          </button>
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
