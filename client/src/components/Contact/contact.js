import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../react-portfolio-assets/assets/walmart.png';
import Adobe from '../../react-portfolio-assets/assets/adobe.png';
import Microsoft from '../../react-portfolio-assets/assets/microsoft.png';
import Facebook from '../../react-portfolio-assets/assets/facebook.png';
import FacebookIcon from '../../react-portfolio-assets/assets/facebook-icon.png';
import TwitterIcon from '../../react-portfolio-assets/assets/twitter.png';
import YouTubeIcon from '../../react-portfolio-assets/assets/youtube.png';
import InstagramIcon from '../../react-portfolio-assets/assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qk1bsi8', 'template_5tr8m6r', form.current, '5qzjtCDoocfdQ3nalJxm7')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <section id="contactPage">
            <div id="clients">
               <h1 className="contactPageTitle">Our Clients</h1>
               <p className="clientDesc">
                  we had the opportunity to work with a diverse group of companies.
                  Some of the notable companies We have worked with includes
               </p>
               <div className="clientImgs">
                <img src={Walmart}   alt="Client" className="clientImg"/>
                <img src={Adobe}   alt="Client" className="clientImg"/>
                <img src={Microsoft}   alt="Client" className="clientImg"/>
                <img src={Facebook}   alt="Client" className="clientImg"/>
               </div>
            </div>
            <div id="contact">
               <h1 className="contactPageTitle">Contact Us</h1>
               <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
               <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link"/>
                    <img src={TwitterIcon} alt="twitter" className="link"/>
                    <img src={YouTubeIcon} alt="YouTube" className="link"/>
                    <img src={InstagramIcon} alt="Instagram" className="link"/>
                </div>
              </form>
          </div>
        </section>
    );
}

export default Contact