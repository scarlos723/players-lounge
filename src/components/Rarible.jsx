import React from 'react'

import Logo from '../assets/Rarible/section-logo.png'
import '../styles/components/Rarible.css'

const Rarible = () => {
  return (
    <section className='rarible'>
      <img src={Logo} alt='Rarible Logo' />
      <h2>rarible nft marketplace</h2>
      <p>
        Not your typical type of NFTs...Curated 1/1 digital
        and physical artworks, exclusive digital memorabilia
        including winners medals, game worn armbands and
        international caps.
        Recognised artists working with iconic athletes
        and all dropping exclusively on Rarible
      </p>
    </section>
  )
}

export default Rarible
