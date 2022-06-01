import React from 'react'
import IMG1 from '../../assets/images/portfolio1.jpg'
import IMG2 from '../../assets/images/portfolio2.jpg'
import IMG3 from '../../assets/images/portfolio3.jpg'
import IMG4 from '../../assets/images/portfolio4.jpg'
import IMG5 from '../../assets/images/portfolio5.png'
import IMG6 from '../../assets/images/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Figma Dashboard UI kit for design web apps',
    demo: 'https://larity.vercel.app',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Figma Dashboard UI kit for design web apps',
    github: 'https://github.com/moniross',
    demo: 'https://larity.vercel.app',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma Dashboard UI kit for design web apps',
    github: 'https://github.com/moniross',
    demo: 'https://larity.vercel.app',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Figma Dashboard UI kit for design web apps',
    github: 'https://github.com/moniross',
    demo: 'https://larity.vercel.app',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Figma Dashboard UI kit for design web apps',
    github: 'https://github.com/moniross',
    demo: 'https://larity.vercel.app',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Figma Dashboard UI kit for design web apps',
    github: 'https://github.com/moniross',
    demo: 'https://larity.vercel.app',
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <div className="container">
      <span className="subheading">My Resent Work</span>
        <h3 className="heading">Portfolio</h3>
        <div className='row'>
        {
           data.map(({id, image, title, github, demo}) => {
            return (
              <div key={id} className="col-lg-4 col-md-6">
              <article className='portfolio_item'>
                <div className='portfolio_img'>
               <img src={image} alt={title} />
                </div>
                <h6>{title}</h6>
                <div className="buttons">
                <a href="{Github}" className='btn' target='_blank'>Github</a>
                <a href="{demo}" className='btn btn_primary' target='_blank'>Live Demo</a>
                </div>
              </article>
              </div>
            )
          })
        }
        </div>
      </div>
    </section>
  )
}

export default Portfolio