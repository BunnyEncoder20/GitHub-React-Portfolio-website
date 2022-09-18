import React from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../images/me.jpg'

const Header = () => {
  return (
    <header>
      {/* Uses the general container class and a head_container class specific to it */}
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Varun Verma</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA /> 
        {/* This contains the 2 links for download CV and Let's Talk present in the CTA.jsxs */}
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me.jpg" />
        </div>
        {/* My image with removed bg */}

        <a href="#contact" className='scroll_down'>Scroll_Down</a>
        {/* The Scroll_Down on the left in vertical orientation */}
      </div>
    </header>
  )
}

export default Header