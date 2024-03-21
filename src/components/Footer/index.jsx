import React from 'react'
import './Footer.css' 
import{ FaYoutube,FaTwitter,FaInstagram} from 'react-icons/fa'
const Footer = () => {
  return (
    <section>
    <div className='footer'>
      <div className='Logo'>
        <img src="#"></img>
        <br></br><br></br>
        <p>'TS Brigde education' a job starter company not the job seeker</p>
      </div>
      <div className='navigation-content'>
        <h2>NAVIGATION</h2>
        <ul>
          <li>About the Barber Shop</li>
          <li>Our Gallery</li>
          <li>Our Latest News</li>
        </ul>
      </div>
      <div className='contact-content'>
        <h2>OUR CONTACTS</h2>
        <ul>
          <li>427,India</li>
          <li><a href='#'>anubhavraj554@gmail.com</a></li>
          <li> +91 7004084995</li>
        </ul>
      </div>
      <div className='services-content'>
        <h2>ALL SERVICES</h2>
        <ul>
          <li>Hairstyle</li>
          <li>Trimming</li>
          <li>Shaving</li>
          <li>Skin Care</li>
        </ul>
      </div> 
        <div className='social-menu'>
          <ul>
        <li> <FaYoutube className='icons youtube'/></li>
         <li><FaTwitter className='icons twitter'/></li>
         <li><FaInstagram className='icons instagram'/></li>
         </ul>
        </div>
  

       
      
    </div>
      <div className="lower-footer">
      <div className="lower-footer-content">
        <div id="footer-align-left">
          Online Barber @2024- All Rights Reserved
        </div>
      </div>
       </div>
		</section>
  )
}

export default Footer