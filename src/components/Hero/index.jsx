import React from 'react'
import './Hero.css'
import { MdOutlineContentCut } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { TbCashOff } from "react-icons/tb";
import { FaHelmetSafety } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
import { FaServicestack } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { FcOnlineSupport } from "react-icons/fc";
import { AiFillSchedule } from "react-icons/ai";
import { FaBusinessTime } from "react-icons/fa";
const Hero = () => {
  return (
    <section>
    
    <div className='Heading'>
      <h1>WHY CHOOSE US !!</h1>

    </div>
    <div className='Container-facility'>
    <div className='imgcorosal'>
      <div id='slider'>
      <figure>
        <img src='\src\assets\barber.jpg'></img>
        <img src='\src\assets\barber2.jpg'></img>
        <img src='\src\assets\barber3img.jpg'></img>
        
      </figure>
      </div>
       </div>
     <div className='facilities'>
      <div id='facility-title'>
        <h1>OUR SERVICES</h1>

      </div>
      <div className='facility-content'>
        <div id='content1'>
        <p>
           Convenient Professional Service
        </p>
        <MdOutlineContentCut className='icons cut' />
        </div>
        <div id='content2'>
        <p>
           Saves Time
        </p>
        <IoIosTime className='icons savetinme' />
        </div>
        <div id='content3'>
        <p>
           Cashless Transactions
        </p>
        <TbCashOff  className='icons cashless'/>
        </div>
        <div id='content4'>
        <p>
           Safety Measures
        </p>
        <FaHelmetSafety className='icons safety' />
        </div>
        <div id='content5'>
        <p>
           Feedback Acknowleged
        </p>
        <VscFeedback className='icons feedback' />

        </div>
        
        </div>
     </div>


     <div className='facilities1'>
      <div id='facility-title1'>
        <h1>FOR BARBER SHOP</h1>

      </div>
      <div className='facility-content1'>
        <div id='content6'>
        <p>
           Prepaid Services Management 
        </p>
        <FaServicestack className='icons prepaid' />
        </div>
        <div id='content7'>
        <p>
          Tax Advantages and Record Keeping
        </p>
        <GiReceiveMoney className='icons tax' />
        </div>
        <div id='content8'>
        <p>
           Barber Support and Resources 
        </p>
        <FcOnlineSupport className='icons support' />
        </div>
        <div id='content9'>
        <p>
           FLexible Scheduling
        </p>
        <AiFillSchedule className='icons scheduling' />

        </div>
        <div id='content10'>
        <p>
         Full/Part-Time Opportunities
        </p>
        <FaBusinessTime  className='icons full/part'/>

        </div>
        
        </div>
        
     </div>
     </div>
     
     <div className='container-client'>
     <div className='client'>
      <h1>What Our Client Says !!</h1>
      <hr></hr>
      <br></br>
      <p>This guy does everything he can to get the job done an done right. This is the second time I've hired him,and I'll hire him again
        in the future.
      </p>
      <br></br> 
      <div id='clientimg'>
        <img src="\src\assets\clientimg.jpg"></img>
      </div>
      <br></br><br></br><br></br>
      <h4>Renee Sims</h4>

    </div>
     </div>
       

     <div class="container">
    <div class="container1">
        <h1>Hair Cut </h1>
        <img src="\src\assets\card1.jpg" ></img>
    <p>Get a stylish haircut from our Professional Haiestylist</p>
         
    </div>
    <div class="container2">
        <h1>Beard Trim</h1>
       <img src="\src\assets\card2.jpg"></img>
     <p>Enhance your look with a precision beard trim</p>
    </div>
    <div class="container3">
        <h1>Hair Color</h1>
        <img src="\src\assets\card3.jpg"></img>
        <p>
          Transform your hair with our professional hair colouring services
        </p>
        
        </div>
        <div class="container4">
        <h1>Massage</h1>
        <img src="\src\assets\card4.jpg"></img>
        <p>
          Relax and rejuvenate with a soothing massage experience
        </p>
        
        </div>
        <div class="container5">
        <h1>Manicure</h1>
        <img src="\src\assets\card5.jpg"></img>
        <p>
           Pamper yourself with a perfect Manicure
        </p>
        
        </div>
    </div>
        

    <div className='info'>
        <div id="info-img">
          <img src="\src\assets\bannerimg.jpg"></img>

        </div>
        <div id="info-para">
          <h1>About BarberBook</h1>
          <strong>Your Premier Online Barber Shop Booking Service</strong>
         <p>
            BarberBook is dedicated to revoluntionizing your grooming experience.With a collective experience of over 
            3 years, we bring you a seamless online platform to book appointment with your favorite barbers.
            <br></br> <br></br>
            At BarberBook, our mission is to enhance your grooming routine by providing  a top-notch online booking service.Whether you're a 
            seasoned pro or new to the world of online barber appointments,we've got you covered. Our platform is designed to offer Convenience 
            and efficiency,ensuring you find the right barber at your fingertips.
            <br></br> <br></br>
            Discover the latest trends in haircut, styles, and grooming techniques through our tutorials and content.WE specialize in utilizing
            HTML, HTML5, CSS, CSS3,jQuery,and JavaScript to create a user-friendly experience.Our Website is not just a booking platform; it's 
            a hub for quality content related to barbering, ensuring you stay informed and inspired.
         </p>
         <br></br> <br></br>
         <div className='Book'>
          <button id='Book-text'>Book Your Appointment</button>
          
         </div>
        </div>
    </div>




   <div  className='contact'>
    <div id="contact-details">
            <h1> Contact Us </h1>
            <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention</span>
            <br></br> <br></br>
            <h2>USA</h2>
            <span> 195 E Parker Square DR,Parker ,Co 801 +43 982-382-2870</span>
            <br></br>  <br></br>
            <h2>INDIA</h2>
            <span> HW95 +C9C ,Mhada Colony , Viman Nagar, Pune , Maharashtra 411014</span>
          </div>
      <div id="contact-form">
        <form>
          <div>
          <input type="text " placeholder='Your Name'></input>
          </div>
          <br ></br> <br></br>
          <div>
          <input type="text " placeholder='Email'></input>
          </div>
          <br ></br> <br></br>
          <div id='msg'>
          <input type="text " placeholder='Message'></input>
          </div>
          <br ></br> <br></br>
          <div >
            <button id ='msg-button'>
              SEND MESSAGE
            </button>
          </div>

        </form>
      </div>
   </div>
    
  </section>
  )
}

export default Hero