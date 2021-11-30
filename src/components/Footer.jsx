import React from 'react';

//Images
import puyol2 from '../assets/footer/desktop2/puyol2.png'
import drogba2 from '../assets/footer/desktop2/drogba2.png'
import terry2 from '../assets/footer/desktop2/terry2.png'

const Footer = () => {
  return (
    <section className='Footer'>

      <section className='Footer-cards'>
        <h1>CHECK OUT COLLECTIBLES</h1>
        <img src={puyol2} alt='Carles Puyol'/>
        <img src={drogba2} alt='Didier Drogba'/>ss
        <img src={terry2} alt='Jhon Terry'/>
      </section>

      <section className='Footer-links'>
        <h3>Links</h3>
      </section>

    </section>
  );
}

export default Footer;