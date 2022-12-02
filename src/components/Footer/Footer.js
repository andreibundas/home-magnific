import React from 'react'
import './Footer.css'

import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='section footer'>
      <div className='container'>
        <div className='grid-container'>
          <div className='footer-grid-item'>
            <h3>Bors, Romania</h3>
            <p>Adresa</p>
            <p> CP</p>
            <p> telefon :</p>
            <Link to='#' className='text-ewhite'>
              hotel1@hotel.ro
            </Link>
          </div>

          <div className='footer-grid-item'>
            <h3>Bors, Romania</h3>
            <p>Adresa</p>
            <p> CP</p>
            <p> telefon :</p>
            <Link to='#' className='text-ewhite'>
              hotel2@hotel.ro
            </Link>
          </div>

          <div className='footer-grid-item'>
            <h3>Bors, Romania</h3>
            <p>Adresa</p>
            <p> CP</p>
            <p> telefon :</p>
            <Link to='#' className='text-ewhite'>
              hotel3@hotel.ro
            </Link>
          </div>

          <div className='footer-grid-item'>
            <h3>Bors, Romania</h3>
            <p>Adresa</p>
            <p> CP</p>
            <p> telefon :</p>
            <Link to='#' className='text-ewhite'>
              hotel4@hotel.ro
            </Link>
          </div>


        </div>

      </div>
      
    </div>
  )
}

export default Footer