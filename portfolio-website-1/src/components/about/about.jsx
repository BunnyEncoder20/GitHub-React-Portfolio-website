import React from 'react'
import "./about.css"
import img from "../../images/aboutme.jpg"
import {TbMilitaryAward} from 'react-icons/tb'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="aboutme.png" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbMilitaryAward className='about__icon'/>   
              <h5>Experience</h5>
              <small>3+ Years Work Xp</small>
            </article>

            <article className="about__card">
              <FaUsers className='about__icon'/>   
              <h5>Clients</h5>
              <small>200+ Happy Clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>   
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, maxime, nesciunt ipsam architecto quae sapiente corporis fuga laudantium fugit est iste eveniet repudiandae magnam reiciendis ab esse deleniti ut voluptatem.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk Business</a>
        </div>
      </div>
    </section>
  )
}

export default About