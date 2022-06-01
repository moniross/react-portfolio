import React from 'react'
import {FiMail} from 'react-icons/fi'
import {RiMessengerLine, RiWhatsappLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u672jhf', 'template_fftd55f', form.current, 'tOmVihCYYOStMNrJs')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <div className="container">
      <span className="subheading">Get In Touch</span>
        <h3 className="heading">Contact Me</h3>
        <div className="row">
          <div className="col-xl-auto col-lg-auto">
            <div className="contact_info">
              <div className="contact_box">
                <FiMail className='contact_icon' />
                <h6>Email</h6>
                <span className='color_text'>monirfouzi20@gmail.com</span>
                <a href="mailto:monirfouzi20@gmail.com" className='submit'>Send a message</a>
              </div>
              <div className="contact_box">
                <RiMessengerLine className='contact_icon' />
                <h6>Messenger</h6>
                <span className='color_text'>moniros</span>
                <a href="https://m.me/mounirfouzii" target='_blank' className='submit'>Send a message</a>
              </div>
              <div className="contact_box">
                <RiWhatsappLine className='contact_icon' />
                <h6>Whatsapp</h6>
                <span className='color_text'>123-456-789</span>
                <a href="https://api.whatsapp.com/send?phone=212612345678" className='submit'>Send a message</a>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <form ref={form} onSubmit={sendEmail}>
              <input type="name" name='name' id="name" placeholder='Your Full Name' required/>
              <input type="email" name='email' id="email" placeholder='Your Email' required/>
              <textarea name='message' id="message" rows="7" placeholder='Your Message' required></textarea>
              <button type="submit" class="btn btn_primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact