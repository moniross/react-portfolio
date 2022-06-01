import React from 'react'
import AVTR1 from '../../assets/images/avatar1.jpg'
import AVTR2 from '../../assets/images/avatar2.jpg'
import AVTR3 from '../../assets/images/avatar3.jpg'
import AVTR4 from '../../assets/images/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi voluptatum laborum aut suscipit delectus voluptate eveniet ea, ipsam exercitationem aspernatur nemo quod. Voluptatum',
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi voluptatum laborum aut suscipit delectus voluptate eveniet ea, ipsam exercitationem aspernatur nemo quod. Voluptatum',
  },
  {
    avatar: AVTR3,
    name: 'Kwam Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi voluptatum laborum aut suscipit delectus voluptate eveniet ea, ipsam exercitationem aspernatur nemo quod. Voluptatum',
  },
  {
    avatar: AVTR4,
    name: 'Monir Dan',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi voluptatum laborum aut suscipit delectus voluptate eveniet ea, ipsam exercitationem aspernatur nemo quod. Voluptatum',
  },
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <div className="container">
      <span className="subheading">Reviewfrom clients</span>
        <h3 className="heading">Testimonials</h3>
        <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      pagination={{ clickable: true }}    
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
       {
             data.map(({avatar, name, review}, index) => {
              return (
                <SwiperSlide key={index} className='Testimonial'>
                <div className="client_avatar">
                  <img src={avatar} alt="Avatar" />
                </div>
                <h6 className='client_name'> {name}</h6>
                  <small className='client_review'>{review}</small>
              </SwiperSlide>
              )
            })
          }
     
    </Swiper>
       
      </div>
    </section>
  )
}

export default Testimonials