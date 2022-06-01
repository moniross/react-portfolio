import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
function Experience() {
  return (
    <section id='expernience'>
      <div className="container">
      <span className="subheading">What Skills I have</span>
        <h3 className="heading">My Experiance</h3>
        <div className="row">
          <div className="col-lg-6">
            <div className="frontend">
              <h5 className='skills_title'>Frontend Development</h5>
              <div className="skills">
                <div className="skill_box">
                  <BsFillPatchCheckFill className='skill_icon' />
                  <div>
                  <h6 className='skill_name'>HTML</h6>
                  <span className='txt_sm color_text'>Experienced</span>
                  </div>
                </div>
                <div className="skill_box">
                  <BsFillPatchCheckFill className='skill_icon' />
                  <div>
                  <h6 className='skill_name'>CSS</h6>
                  <span className='txt_sm color_text'>Experienced</span>
                  </div>
                </div>
                <div className="skill_box">
                  <BsFillPatchCheckFill className='skill_icon' />
                  <div>
                  <h6 className='skill_name'>Javascript</h6>
                  <span className='txt_sm color_text'>Experienced</span>
                  </div>
                </div>
                <div className="skill_box">
                  <BsFillPatchCheckFill className='skill_icon' />
                  <div>
                  <h6 className='skill_name'>Bootstrap</h6>
                  <span className='txt_sm color_text'>Experienced</span>
                  </div>
                </div>
                <div className="skill_box">
                  <BsFillPatchCheckFill className='skill_icon' />
                  <div>
                  <h6 className='skill_name'>Tailwind</h6>
                  <span className='txt_sm color_text'>Experienced</span>
                  </div>
                </div>
                <div className="skill_box">
                  <BsFillPatchCheckFill className='skill_icon' />
                  <div>
                  <h6 className='skill_name'>ReactJs</h6>
                  <span className='txt_sm color_text'>Experienced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="backend">
            <h5 className='skills_title'>Backend Development</h5>
            <div className="skills">
                <div className="skill_box">
                  <BsFillPatchCheckFill className='skill_icon' />
                  <div>
                  <h6 className='skill_name'>Node JS</h6>
                  <span className='txt_sm color_text'>Experienced</span>
                  </div>
                </div>
                <div className="skill_box">
                  <BsFillPatchCheckFill className='skill_icon' />
                  <div>
                  <h6 className='skill_name'>MongoDB</h6>
                  <span className='txt_sm color_text'>Experienced</span>
                  </div>
                </div>
                <div className="skill_box">
                  <BsFillPatchCheckFill className='skill_icon' />
                  <div>
                  <h6 className='skill_name'>PHP</h6>
                  <span className='txt_sm color_text'>Experienced</span>
                  </div>
                </div>
                <div className="skill_box">
                  <BsFillPatchCheckFill className='skill_icon' />
                  <div>
                  <h6 className='skill_name'>MySQL</h6>
                  <span className='txt_sm color_text'>Experienced</span>
                  </div>
                </div>
                <div className="skill_box">
                  <BsFillPatchCheckFill className='skill_icon' />
                  <div>
                  <h6 className='skill_name'>Python</h6>
                  <span className='txt_sm color_text'>Experienced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience