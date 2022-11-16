import React from'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

const Footer = () => {
    return(
      <footer id='footer'>
        <a href="#" className='footer__logo'>Varun Verma</a>

            <ul className='permalinks'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testmonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/profile.php?id=100048411932272"><AiFillFacebook/></a>
                <a href="https://instagram.com"><BsInstagram/></a>
                <a href="https://telegram.org/"><BsTelegram/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; GDK Productions.Co | All rights reserved.</small>
            </div>
        </footer>
    )
}
export default Footer