import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="www.linkedin.com/in/varunverma2001" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/BunnyEncoder20" target="_blank"><BsGithub/></a>
        <a href="https://www.youtube.com/channel/UC2ZvuEJbTuNTXgsTcR-rPxw" target="_blank"><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocials