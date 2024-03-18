import React from 'react'
import './Hero.css'

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
        </div>
        <div id='content2'>
        <p>
           Saves Time
        </p>
        </div>
        <div id='content3'>
        <p>
           Cashless Transactions
        </p>
        </div>
        <div id='content4'>
        <p>
           Safety Measures
        </p>
        </div>
        <div id='content5'>
        <p>
           Feedback Acknowleged
        </p>
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
        </div>
        <div id='content7'>
        <p>
          Tax Advantages and Record Keeping
        </p>
        </div>
        <div id='content8'>
        <p>
           Barber Support and Resources 
        </p>
        </div>
        <div id='content9'>
        <p>
           FLexible Scheduling
        </p>
        </div>
        <div id='content10'>
        <p>
         Full/Part-Time Opportunities
        </p>
        </div>
        
        </div>
        
     </div>
     </div>
     <div className='container-client'>
     <div className='client'>
      <h1>What Our Client Says !!</h1>
      <hr></hr>
      <p>This guy does everything he can to get the job done an done right. THis is the second time I've hired him,and I'll hire him again
        in the future.
      </p>
      <div id='clientimg'>
        <img src="#"></img>
      </div>
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
          <img src="\src\assets\barber1img.jpg"></img>

        </div>
        <div id="info-para">
          <h1>About BarberBook</h1><br ></br>
          <span>Your Premier Online Barber Shop Booking Service</span>
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
         <div className='Book'>
          <button id='Book-text'>Book Your Appointment</button>
          
         </div>
        </div>
    </div>




   <div  className='contact'>
    <div id="contact-details">
            <h1> Contact Us </h1>
            <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention</span>
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
          <div>
          <input type="text " placeholder='Your Name'></input>
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