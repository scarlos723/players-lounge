import React from 'react'
import '../styles/components/Footer.css'
import arrow from '../assets/footer/arrow.png'
import logo from '../assets/footer/playerlounge.png'

const Footer = () => {
  return (
    <section className='Footer'>

      <section className='Footer-cards'>
        <h1>CHECK OUT COLLECTIBLES</h1>
        <div className='Soccer-players'>
          <div /> <div /> <div /> <div />
        </div>
        <button>
          <img src={arrow} alt='Arrow up' />
          <p>Buy now</p>
        </button>
      </section>

      <section className='Footer-links'>
        <img src={logo} alt='Player lounge' />
        <h3>Links</h3>
        <p>Copyright, 2021 Player Lounge</p>
      </section>

    </section>
  )
}

export default Footer
