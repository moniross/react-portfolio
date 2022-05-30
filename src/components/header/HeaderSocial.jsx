import React from 'react'
import {BsInstagram, BsGithub, BsDribbble } from 'react-icons/bs'
function HeaderSocial() {
  return (
    <div className='header_socials'>
        
        <a href="https://instagram.com/moniros20" target="_blank"  rel="noreferrer noopener" title="Instagram">  <BsInstagram /></a>
        <a href="https://github.com/moniross" target="_blank" rel="noreferrer noopener" title="Github"> <BsGithub /></a>
        <a href="https://dribbble.com/moniros" target="_blank" rel="noreferrer noopener" title="Dribbble"> <BsDribbble /></a>
    </div>
  )
}

export default HeaderSocial