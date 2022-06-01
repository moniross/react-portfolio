import React from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'
function Services() {
  return (
    <section id='services'>
      <div className="container">
        <span className="subheading">What I Offer</span>
        <h3 className="heading">Services</h3>
        <div className="row gx-5">
          {/* ui design */}
          <div className="col-lg-4">
            <div className="services_box">
              <h6 className='service_title'>UI/UX Design</h6>
              <ul className='servies_list'>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
              </ul>
            </div>
          </div>
          {/* web development */}
          <div className="col-lg-4">
            <div className="services_box">
              <h6 className='service_title'>Web Development</h6>
              <ul className='servies_list'>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
              </ul>
            </div>
          </div>
          {/* Content Creation */}
          <div className="col-lg-4">
            <div className="services_box">
              <h6 className='service_title'>Content Creation</h6>
              <ul className='servies_list'>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <AiOutlineCheckCircle className='services_icon' />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services