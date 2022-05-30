import React from 'react'
import CTA from './CTA'
import ME from '../../assets/images/me.png';
import HeaderSocial from './HeaderSocial';

function Header() {
  return (
    <header className='header'>
      <div className="container">
      <div className='hero'>
      <span >Hello I'im</span>
        <h1 className='mb-2 mt-2'>Monir Fouzi</h1>
       
        <span className='color_light'>Front-End Developer</span>
      </div>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me " />
        </div>
        <a href="#contact" className='scroll_down'>scroll Down </a>
      </div>
    </header>
  )
}

export default Header