import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs' 
import emailjs from '@emailjs/browser';

const Contact = () => {
  const  form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_36rvj5p', 'template_k74g85i', form.current, 'XsHFvOPCr4_bfCnBg')
      
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
    };
    return(
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>varun.verma2020@vitstudent.ac.in</h5>
                        <a href="mailto:varun.verma2020@vitstudent.ac.in">Send a Mail</a>
                    </article>
                    <article className="contact_option">
                        <RiMessengerLine className='contact_option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Varun Verma</h5>
                        <a href="https://m.me/profile.php?id=100048411932272" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className='contact_option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>+91 7304386014</h5>
                        <a href="https://wa.me/917304386014?text=" target='_blank'>Send a Message</a>
                    </article>
                </div>

                {/* Form for the email service*/}
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button> 
                </form>
            </div>
        </section>
    )
}

export default Contact