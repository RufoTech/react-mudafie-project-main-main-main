import React from 'react'
import { FaAnglesRight } from "react-icons/fa6";
import Form from './Form';

const Contact:React.FC = () => {
  return (
    <>
    <div  className='contact-links   '>
    <div className="container">
        <h1 data-aos="fade-up"  className='playfair-display py-4'>Contact</h1>
        <h5 data-aos="fade-up" className='text-light roboto-light'>The smaller male cones release pollen, which fertilizes the female</h5>
        



    </div>
    </div>

    <div data-aos="fade-up" className="container">
    <div className="avabile-link d-flex align-items-center">
    <h6 className='text-light poppins-bold'>Start <FaAnglesRight  className='double-left-icon'/> <span className='px-4 contact-link-contact'>Contact</span></h6>
    
    </div>

    <div className="contact-melumatlari  py-5 my-5  align-items-center ">
   <div className="row">
    <div className="contact-melumat col-12 col-md-6 py-3">
    <h2 className='roboto-bolds static-num'>07</h2>
    <h2 className='playfair-display py-2'><span className='gallery-h3'>Homepark</span> Living Spaces </h2>
    <p className='poppins-bold male py-2'>SMALLER MALE CONES </p>


    </div>
    <div className="contact-melumat1 col-12 col-md-3  ">
        <h6 className='poppins-bold '>Visit Us</h6>
        <p className='roboto-light visit'>Kristiatik 15th Street, Floot 17 <br />
        Kiev, Ukraine 78692</p>
    </div>
    <div className="contact-melumat1 col-12 col-md-3 ">
        <h6 className='poppins-bold'>SAY HELLO</h6>
        <a href=" " className='text-decoration-none text-dark roboto-light'>hello@homepark.com.ua <br /> +380(98)298-59-73</a>
    </div>
   </div>

    </div>

    <div className="google-map  ">
        <div className="row">
            <div className="map-left-side col-12 col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.8508906436773!2d49.87025883620267!3d40.38252485947876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307de28bc878af%3A0x5e324b5681f291aa!2sM%C4%B0T%20Academy!5e0!3m2!1str!2saz!4v1722966048241!5m2!1str!2saz" width="600" height="450"   loading="lazy" className='w-100'></iframe>
            </div>
            <div className="map-right-side col-12 col-md-6">
                <Form/>
                

            </div>
        </div>
    </div>

    <div className="py-5 my-5"></div>

    </div>
  
    
   
</>
  )
}

export default Contact