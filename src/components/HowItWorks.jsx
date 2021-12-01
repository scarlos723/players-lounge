import React from 'react'
import '../styles/components/HowItWorks.css'

export default function HowItWorks () {
  return (
    <section className='how-it-works'>
      <h2>How it works</h2>
      <div className='step'>
        <span>01</span>
        <div className='step-description'>
          <h3>GRAB ICONIC COLLECTIBLES</h3>
          <p>
            Get in on drops where you can buy limited-edition
            digital collectibles produced by sport,
            entertainment, and culture icons.
          </p>
        </div>
      </div>
      <div className='step'>
        <span>02</span>
        <div className='step-description'>
          <h3>UNLOCK A-LIST EXPERIENCES</h3>
          <p>
            Score one-of-a-kind individually signed editions
            and gain access to exclusive content and experiences.
          </p>
        </div>
      </div>
      <div className='step'>
        <span>03</span>
        <div className='step-description'>
          <h3>JOIN THE COMMUNITY</h3>
          <p>
            Link your Discord account and get access to
            exclusive communities for Players Lounge
            collectible holders.
          </p>
        </div>
      </div>
      <div className='step'>
        <span>04</span>
        <div className='step-description'>
          <h3>GET ONTO RARIBLE</h3>
          <p>
            Find players lounge drops and offers
            exclusively on rarible.
          </p>
        </div>
      </div>
    </section>
  )
}
