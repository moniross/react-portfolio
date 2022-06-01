import React from "react";
import ME from "../../assets/images/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscRootFolderOpened } from "react-icons/vsc";
function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="subheading">GetTo Know</span>
        <h3 className="heading">About Me</h3>
        <div className="row">
          <div className="col-lg-5">
            <div className="about_img">

            <img src={ME} alt="about me" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about_content">

            <div className="about_cards">
              <article className="about_card">
                <FaAward className="about_icon" />
                <h6>Experience</h6>
                <small>3+ Years Xorking</small>
              </article>
              <article className="about_card">
                <FiUsers className="about_icon" />
                <h6>Clients</h6>
                <small>200+ Worldwide</small>
              </article>
              <article className="about_card">
                <VscRootFolderOpened className="about_icon" />
                <h6> Projects</h6>
                <small>80+ Complteted</small>
              </article>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste adipisci dolorem esse, perferendis nam aliquid et impedit voluptates commodi saepe qui fuga temporibus quia, tenetur minus illum eligendi, cum enim.</p>
            <a href="#contact" className="btn btn_primary">Let's Talk</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
