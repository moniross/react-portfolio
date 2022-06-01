import React from 'react'
import {BsInstagram, BsGithub, BsDribbble } from 'react-icons/bs'

function footer() {
  return (
    <footer id='footer'>
      <div className="conatiner">
        <a href="#" className='footer_logo'>MONIROS</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_socials">
          <a href="https://instagram.com/moniros20" target="_blank"  rel="noreferrer noopener" title="Instagram">  <BsInstagram /></a>
          <a href="https://github.com/moniross" target="_blank" rel="noreferrer noopener" title="Github"> <BsGithub /></a>
          <a href="https://dribbble.com/moniros" target="_blank" rel="noreferrer noopener" title="Dribbble"> <BsDribbble /></a>
        </div>
        <div className="footer_copyright">
          <small >&copy; 2022 MONIROS all rights reserved</small>
        </div>
      </div>
    </footer>
  )
}

export default footer